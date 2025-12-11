#!/usr/bin/env python3
"""
Generate favicon PNG variants from the Sleepercells attention mark using only the standard library.
This script renders the vector shapes at high resolution with simple supersampling, then downsamples
to the desired sizes. No external dependencies are required.
"""
from __future__ import annotations

import math
import os
import struct
import zlib
from typing import Iterable, List, Sequence, Tuple

Color = List[float]  # [r, g, b, a] in 0..1


def hex_to_rgba(hex_value: str, alpha: float = 1.0) -> Color:
    hex_value = hex_value.lstrip("#")
    r = int(hex_value[0:2], 16) / 255.0
    g = int(hex_value[2:4], 16) / 255.0
    b = int(hex_value[4:6], 16) / 255.0
    return [r, g, b, alpha]


def clamp(value: float, lo: float = 0.0, hi: float = 1.0) -> float:
    return max(lo, min(value, hi))


def mix(c0: Color, c1: Color, t: float) -> Color:
    return [
        c0[i] + (c1[i] - c0[i]) * t
        for i in range(4)
    ]


def sample_gradient(stops: Sequence[Tuple[float, Color]], t: float) -> Color:
    if t <= stops[0][0]:
        return stops[0][1][:]
    for i in range(len(stops) - 1):
        a_pos, a_color = stops[i]
        b_pos, b_color = stops[i + 1]
        if t <= b_pos:
            local_t = (t - a_pos) / (b_pos - a_pos)
            return mix(a_color, b_color, clamp(local_t))
    return stops[-1][1][:]


def blend_pixel(dst: Color, src: Color) -> None:
    """Alpha-composite src over dst."""
    sa = src[3]
    if sa <= 0.0:
        return
    da = dst[3]
    out_a = sa + da * (1.0 - sa)
    if out_a <= 0.0:
        dst[:] = [0.0, 0.0, 0.0, 0.0]
        return
    out_r = (src[0] * sa + dst[0] * da * (1.0 - sa)) / out_a
    out_g = (src[1] * sa + dst[1] * da * (1.0 - sa)) / out_a
    out_b = (src[2] * sa + dst[2] * da * (1.0 - sa)) / out_a
    dst[0], dst[1], dst[2], dst[3] = out_r, out_g, out_b, out_a


def make_canvas(size: int, color: Color) -> List[List[Color]]:
    return [[color[:] for _ in range(size)] for _ in range(size)]


def draw_radial_gradient(
    img: List[List[Color]],
    center: Tuple[float, float],
    radius: float,
    stops: Sequence[Tuple[float, Color]],
    scale: int,
) -> None:
    h = len(img)
    w = len(img[0])
    cx, cy = center
    for y in range(h):
        y_pos = (y + 0.5) / scale
        dy = y_pos - cy
        for x in range(w):
            x_pos = (x + 0.5) / scale
            dx = x_pos - cx
            t = math.hypot(dx, dy) / radius
            color = sample_gradient(stops, clamp(t))
            blend_pixel(img[y][x], color)


def draw_circle_gradient(
    img: List[List[Color]],
    center: Tuple[float, float],
    radius: float,
    stops: Sequence[Tuple[float, Color]],
    scale: int,
    edge_softness: float = 1.0,
) -> None:
    h = len(img)
    w = len(img[0])
    cx, cy = center
    for y in range(h):
        y_pos = (y + 0.5) / scale
        dy = y_pos - cy
        for x in range(w):
            x_pos = (x + 0.5) / scale
            dx = x_pos - cx
            dist = math.hypot(dx, dy)
            cover = 1.0 - clamp((dist - radius) / edge_softness, 0.0, 1.0)
            if cover <= 0.0:
                continue
            t = clamp(dist / radius)
            color = sample_gradient(stops, t)
            color[3] *= cover
            blend_pixel(img[y][x], color)


def draw_ring(
    img: List[List[Color]],
    center: Tuple[float, float],
    radius: float,
    width: float,
    color: Color,
    scale: int,
    edge_softness: float = 0.8,
) -> None:
    h = len(img)
    w = len(img[0])
    cx, cy = center
    half = width / 2.0
    for y in range(h):
        y_pos = (y + 0.5) / scale
        dy = y_pos - cy
        for x in range(w):
            x_pos = (x + 0.5) / scale
            dx = x_pos - cx
            dist = math.hypot(dx, dy)
            band = abs(dist - radius) - half
            cover = 1.0 - clamp(band / edge_softness, 0.0, 1.0)
            if cover <= 0.0:
                continue
            blended = color[:]
            blended[3] *= cover
            blend_pixel(img[y][x], blended)


def within_arc(angle_deg: float, start: float, end: float) -> bool:
    """Check if angle lies on the arc traveling from start to end (clockwise positive)."""
    span = (end - start) % 360.0
    rel = (angle_deg - start) % 360.0
    return rel <= span


def sample_wave_gradient(x: float, y: float, size: float) -> Color:
    # Diagonal gradient from top-left to bottom-right.
    t = clamp((x + y) / (2.0 * size))
    wave_stops = (
        (0.0, hex_to_rgba("#22D3EE")),
        (0.48, hex_to_rgba("#60A5FA")),
        (1.0, hex_to_rgba("#A855F7")),
    )
    return sample_gradient(wave_stops, t)


def draw_arc(
    img: List[List[Color]],
    center: Tuple[float, float],
    radius: float,
    start_deg: float,
    end_deg: float,
    width: float,
    scale: int,
    edge_softness: float = 0.9,
) -> None:
    h = len(img)
    w = len(img[0])
    cx, cy = center
    for y in range(h):
        y_pos = (y + 0.5) / scale
        dy = y_pos - cy
        for x in range(w):
            x_pos = (x + 0.5) / scale
            dx = x_pos - cx
            dist = math.hypot(dx, dy)
            band = abs(dist - radius) - width / 2.0
            cover = 1.0 - clamp(band / edge_softness, 0.0, 1.0)
            if cover <= 0.0:
                continue
            angle = (math.degrees(math.atan2(dy, dx)) + 360.0) % 360.0
            if not within_arc(angle, start_deg % 360.0, end_deg % 360.0):
                continue
            color = sample_wave_gradient(x_pos, y_pos, 64.0)
            color[3] = cover
            blend_pixel(img[y][x], color)


def downsample(img: List[List[Color]], factor: int) -> List[List[Color]]:
    if factor == 1:
        return img
    h = len(img)
    w = len(img[0])
    target_h = h // factor
    target_w = w // factor
    output: List[List[Color]] = []
    for ty in range(target_h):
        row: List[Color] = []
        for tx in range(target_w):
            r_sum = g_sum = b_sum = a_sum = 0.0
            for yy in range(factor):
                src_row = img[ty * factor + yy]
                for xx in range(factor):
                    r, g, b, a = src_row[tx * factor + xx]
                    r_sum += r * a
                    g_sum += g * a
                    b_sum += b * a
                    a_sum += a
            count = float(factor * factor)
            avg_a = a_sum / count
            if avg_a == 0.0:
                row.append([0.0, 0.0, 0.0, 0.0])
            else:
                row.append([r_sum / a_sum, g_sum / a_sum, b_sum / a_sum, avg_a])
        output.append(row)
    return output


def write_png(path: str, img: List[List[Color]]) -> None:
    h = len(img)
    w = len(img[0])
    signature = b"\x89PNG\r\n\x1a\n"
    with open(path, "wb") as f:
        f.write(signature)

        def chunk(tag: bytes, data: bytes) -> None:
            f.write(struct.pack(">I", len(data)))
            f.write(tag)
            f.write(data)
            f.write(struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF))

        ihdr = struct.pack(">IIBBBBB", w, h, 8, 6, 0, 0, 0)  # 8-bit RGBA
        chunk(b"IHDR", ihdr)

        raw_bytes = bytearray()
        for row in img:
            raw_bytes.append(0)  # filter type 0
            for r, g, b, a in row:
                raw_bytes.extend(
                    (
                        int(clamp(r) * 255 + 0.5),
                        int(clamp(g) * 255 + 0.5),
                        int(clamp(b) * 255 + 0.5),
                        int(clamp(a) * 255 + 0.5),
                    )
                )
        compressed = zlib.compress(bytes(raw_bytes), level=9)
        chunk(b"IDAT", compressed)
        chunk(b"IEND", b"")


def render_icon(size: int, scale: int = 4) -> List[List[Color]]:
    canvas_size = size * scale
    background = hex_to_rgba("#050816")
    img = make_canvas(canvas_size, background)

    glow_stops = (
        (0.0, hex_to_rgba("#22D3EE", 0.55)),
        (0.45, hex_to_rgba("#60A5FA", 0.32)),
        (0.80, hex_to_rgba("#A855F7", 0.20)),
        (1.0, hex_to_rgba("#050816", 0.0)),
    )
    draw_radial_gradient(img, (32.0, 28.8), 48.0, glow_stops, scale)

    cell_stops = (
        (0.0, hex_to_rgba("#22D3EE")),
        (0.75, hex_to_rgba("#60A5FA")),
        (1.0, hex_to_rgba("#7AB5FF")),
    )
    draw_circle_gradient(img, (32.0, 32.0), 8.5, cell_stops, scale)

    ring_color = hex_to_rgba("#0AE7FF", 0.15)
    draw_ring(img, (32.0, 32.0), 10.5, 2.5, ring_color, scale)

    draw_arc(img, (32.0, 32.0), 14.0, -40.0, 190.0, 6.0, scale)
    draw_arc(img, (32.0, 32.0), 21.0, -15.0, 150.0, 5.5, scale)
    draw_arc(img, (32.0, 32.0), 27.0, 50.0, 240.0, 5.0, scale)

    return downsample(img, scale)


def main() -> None:
    sizes = (64, 48, 32, 16)
    output_dir = os.path.join(os.path.dirname(__file__), "..", "public")
    for size in sizes:
        img = render_icon(size)
        out_path = os.path.join(output_dir, f"favicon-{size}.png")
        write_png(out_path, img)
        print(f"wrote {out_path}")


if __name__ == "__main__":
    main()
