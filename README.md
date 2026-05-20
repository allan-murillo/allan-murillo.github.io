# Allan Murillo Portfolio

A React + TypeScript portfolio website designed for static hosting, including GitHub Pages.

## Stack

- React
- TypeScript
- Vite
- Framer Motion
- Lucide React

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start development:

```bash
npm run dev
```

3. Build production files:

```bash
npm run build
```

## GitHub Pages

This project uses `base: "./"` in [vite.config.ts](/C:/Users/acost/Documents/Allan%20Dev%20Portfolio/vite.config.ts) so it can be uploaded to GitHub Pages without route issues.

After building, upload the contents of the generated `dist` folder to your GitHub Pages branch or repository.

## Update your contact details

Replace the placeholder values in [src/components/ContactSection.tsx](/C:/Users/acost/Documents/Allan%20Dev%20Portfolio/src/components/ContactSection.tsx):

- `allan@example.com`
- `+63 0000 000 000`
- GitHub link
- LinkedIn link

## Add your profile photo

Place your real photo in:

`public/allan-profile.jpg`

The hero section is already wired to use that file and will fall back to the placeholder graphic if it is missing.

## Notes

- The contact form currently uses `mailto:` so it works on static hosting without a backend.
- If you want a real hosted form later, connect it to Formspree, FormSubmit, Netlify Forms, or your own API endpoint.
