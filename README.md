# Birthday Galaxy Experience

A premium, cinematic birthday website built with Next.js 15, React 19, TypeScript, Tailwind CSS, GSAP, Framer Motion, Three.js, React Three Fiber, tsParticles, Lenis, Howler.js, React Icons, and React Intersection Observer.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FIshaqshaik99%2Fbirthday-galaxy-experience)

## Stack

- Next.js 15 App Router
- React 19 + TypeScript
- Tailwind CSS
- GSAP + Framer Motion
- Three.js + React Three Fiber
- tsParticles
- Lenis smooth scroll
- Howler.js audio

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Personalize The Website

Update `lib/data.ts` to change:

- `recipientName`
- `nextBirthday`
- `turningAge`
- hero text and letter copy
- gallery captions and memory cards
- `audioTrack`

Replace the placeholder images in `public/images`:

- `hero.jpg`
- `childhood.jpg`
- `school.jpg`
- `college.jpg`
- `selfie1.jpg`
- `selfie2.jpg`
- `group.jpg`
- `birthday.jpg`
- `final.jpg`

Replace the placeholder music file in `public/audio/soft-piano.wav` with your own soundtrack if desired.

## Project Structure

```text
app/
components/
hooks/
lib/
public/
  audio/
  fonts/
  images/
types/
assets/
```

## Notes

- The current image and audio files are lightweight placeholders so the project runs immediately.
- Heavy visual layers are isolated in client components and dynamically imported to keep the initial load lean.
- The site is responsive and structured so you can easily keep editing content without touching the animation system.
