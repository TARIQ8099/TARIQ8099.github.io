# Image slots

**All images are in place.** This file documents which file feeds which slot, so
you can swap any of them later by overwriting the file — no code change needed.

Sources were resized to max 1500px and re-encoded as progressive JPEG (the
originals were 3–5MB camera files, far too heavy for a web page).

## Profile photo

| File | Used in |
|------|---------|
| `profile.jpg` | About Me section portrait |

Portrait orientation works best (roughly 4:5, e.g. 800×1000px).

## Certificates

Save these inside the `certificates/` folder:

| File | Achievement it appears on |
|------|---------------------------|
| `certificates/first-prize.jpg` | Achievement card 1 — First Prize, High-Tech Main Track (2025 Henan Innovation Competition) |
| `certificates/gold-award.jpg` | Achievement card 2 — Gold Award / 金奖 (智维先锋 certificate of honor) |
| `certificates/urbanai.jpg` | Achievement card 3 — Certificate of Honor, UrbanAI |
| `certificates/essay-competition.jpg` | Achievement card 6 — Silk Road Style Award (Belt and Road and My Hometown) |
| `certificates/isa-director.jpg` | Leadership row — Director, Academic Department, ISA |
| `certificates/volunteer-sports.jpg` | Leadership row — Sunshine Sports Meeting (Apr 2025) |
| `certificates/volunteer-orientation.jpg` | Leadership row — New Student Orientation (Sep 2024) |

Landscape works best for certificates (roughly 4:3).

Two achievement cards are intentionally text-only with a medal icon instead of a
photo, because no certificate image exists for them:

- Henan Government Scholarship (2023)
- Outstanding Student Award

Two Leadership rows likewise have no certificate and show a neutral icon:

- BNCC awards (Best Shooter / Best Cadet)
- Donation Club membership

## Notes

- `.jpg`, `.png` and `.webp` all work — if you use a different extension, update
  the matching path in `src/data/portfolio.ts`.
- Keep files under ~400KB each so the page stays fast.
