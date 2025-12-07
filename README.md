
  # Create Landing Page

  This is a code bundle for Create Landing Page. The original project is available at https://www.figma.com/design/xdWaqNzJeVhLbU5uegihGM/Create-Landing-Page.

  ## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Deploying to GitHub Pages

- A workflow at `.github/workflows/deploy.yml` builds the site (`npm run build`) and deploys it to GitHub Pages on pushes to `main` or `master`, or when manually dispatched.
- The Vite output directory is `build/` and is uploaded as the Pages artifact.
- The custom domain `sleepercells.ai` is set via `public/CNAME`; update that file if you point the site elsewhere.
- In your repository settings, set Pages to use GitHub Actions as the source if it is not already enabled.
  
