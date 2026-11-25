# Ali Aitoufkir — Personal Portfolio

Static bilingual (English / French) personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

This generates the static bundle inside `dist/`. `vite.config.ts` uses `base: './'` so the built files work cleanly both at a domain root (`/`) and inside any sub-path folder (`/portfolio/`).

## Media and PDF assets

All CV, project screenshots, architecture diagrams, and PDF reports/presentations are stored in `public/assets/aistudio/` and wired in `src/content/siteContent.ts`:
- `Ali_Aitoufkir_CV_882cf68c.pdf`
- `hero.pic_1239e048.jpeg`
- `Fellah_HomeScreen_ab3b5d71.jpg`, `Fellah_Screen_e37ceb7a.png`, `Fellah_pipeline_926ce84f.png`
- `FellahAI_Report_85c03173.pdf`, `FellahAI_Presentation_1b0c1255.pdf`
- `IDPS_HOMe_cef04eac.png`, `IDPS_Monitor_747f9340.png`, `IDPS_Terminal_025f12d5.png`
- `IDPS_Report_a05b1e1c.pdf`, `IDPS_Presentation_047b280b.pdf`

## Static deployment

Run `npm run build` and upload the contents of `dist/` to any static hosting provider or static web server directory. No backend, database, or environment variables are required.
