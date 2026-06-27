# Deployment Guide

## Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Keep the default settings for a Next.js app.
4. Deploy.

## Manual Build

```bash
npm install
npm run build
npm start
```

## Before Deploying

- Replace the image placeholders in `public/images`.
- Replace `public/audio/soft-piano.wav` if you want your own soundtrack.
- Update `lib/data.ts` with the real birthday date, name, letter text, and captions.
- Test on mobile and desktop once the real media is added.
