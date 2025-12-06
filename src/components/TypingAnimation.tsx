import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  words: string[];
  className?: string;
  gradientColors?: { from: string; via?: string; to: string };
}

export function TypingAnimation({ words, className = '', gradientColors }: TypingAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseAfterWord = 2000;
    const pauseAfterDelete = 500;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Word complete, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseAfterWord);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Deletion complete, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  const gradientStyle = gradientColors 
    ? {
        background: gradientColors.via 
          ? `linear-gradient(90deg, ${gradientColors.from}, ${gradientColors.via}, ${gradientColors.to})`
          : `linear-gradient(90deg, ${gradientColors.from}, ${gradientColors.to})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }
    : {};

  return (
    <span className={className} style={gradientStyle}>
      {currentText}
      <span 
        className="inline-block w-0.5 h-[1em] ml-1 align-middle" 
        style={{ 
          transform: 'translateY(-0.1em)',
          background: showCursor ? (gradientColors?.from || '#22D3EE') : 'transparent',
        }} 
      />
    </span>
  );
}