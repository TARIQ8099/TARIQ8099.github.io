# MD Tariq Uz Zaman — Portfolio

A single-page personal portfolio built from the supplied CV spec. Navy & gold,
Inter, nine sections, fully responsive, with scroll-triggered animation throughout.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

| Command | What it does |
|---------|--------------|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Type-check, then build to `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run typecheck` | Type-check only |

## Adding your photos

Nothing is hardcoded — drop files into `public/images/` using the names listed in
[`public/images/README.md`](public/images/README.md) and they appear automatically.
Until then, each slot shows a designed placeholder rather than a broken image.

Two achievement cards are intentionally text-only with a medal icon, because no
certificate exists for them: the Henan Government Scholarship and the Outstanding
Student Award.

## Editing content

**All text lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).**
Change it there and every section updates. You should not need to touch the
components to update wording, add a project, or add an award.

### Adding LinkedIn later

LinkedIn is currently hidden everywhere. To turn it on, set one value:

```ts
// src/data/portfolio.ts
linkedin: 'https://linkedin.com/in/your-handle',
```

The icon then appears in the landing hero, the contact panel and the footer
automatically — no layout changes needed.

## How the contact form sends

The form validates inline, then opens the visitor's mail client with the message
pre-composed to `zaman.mdtariquz@gmail.com`. That works anywhere with no backend
and no signup.

If you'd rather receive submissions without the visitor's mail app opening, sign
up for a free [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com)
endpoint and replace the `window.location.href = ...` line in
[`src/components/Contact.tsx`](src/components/Contact.tsx) with a `fetch` POST to
that endpoint.

## Deploying (GitHub Pages)

This repo ships a workflow at `.github/workflows/deploy.yml` that builds and
publishes the site on every push to `main`. You never commit `dist/` — the
workflow builds it.

One-time setup:

1. Create a GitHub repo named exactly **`TARIQ8099.github.io`** (your username +
   `.github.io`). That name is what makes the site live at the root URL.
2. Push this project to it.
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions.**
   (Not "Deploy from a branch" — that's the older method and won't build Vite.)
4. Wait for the green check on the **Actions** tab.

Live at **https://tariq8099.github.io**

After that, every `git push` redeploys automatically — usually live in 1–2 minutes.

`vite.config.ts` sets `base: './'` so assets resolve correctly whether the site
is served from a root domain or a subfolder.

## Accessibility notes

- All body text meets WCAG AA contrast (verified: lowest pair 5.5:1, most 8–13:1).
  Gold is used at `gold.ink` (#7A5F12) on light backgrounds, since bright gold on
  white would fail contrast.
- Every animation is disabled under `prefers-reduced-motion: reduce`, and each
  section renders in its final readable state.
- Keyboard focus rings are visible everywhere, there's a skip-to-content link,
  the nav reflects the section in view via `aria-current`, and touch targets are
  at least 44×44px.

## Stack

React 18, TypeScript, Vite 6, Tailwind CSS 3, Framer Motion 11, lucide-react icons.
