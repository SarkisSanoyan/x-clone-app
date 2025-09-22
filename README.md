# X-clone

A small Next.js 15 application that recreates core UI patterns from X/Twitter. Built with Next.js, React and Tailwind CSS.

## Quick start

Install dependencies (preferred: Bun):

```bash
bun install
# or
npm install
# or
yarn
```

Run the dev server:

```bash
bun run dev
# or
npm run dev
# or
yarn dev
```

Open http://localhost:3000

Build and run production:

```bash
bun run build
bun run start
# or
npm run build && npm run start
```

## Project layout

- `src/app/` — Next.js app router pages and layouts
- `src/components/` — shared components (`Header.tsx`, `Menu.tsx`, etc.)
- `src/server-actions/` — server actions (e.g. `post-tweet.ts`)
- `src/shared/` — shared data and types
- `public/` — static assets

## Scripts

Defined in `package.json`:

- `dev` — `next dev --turbopack`
- `build` — `next build --turbopack`
- `start` — `next start`

If you run into Turbopack issues, remove `--turbopack` from the scripts temporarily.

## Notes & troubleshooting

- Ensure your Node.js version is compatible with Next.js 15 / React 19 (Node 18+ recommended) if you don't use Bun.
- If CSS or Tailwind isn't applied, check `src/app/globals.css` and `postcss.config.mjs`.
- To use Bun, install from https://bun.sh and prefer `bun install` + `bun run dev` for faster installs and start times.

## Contributing

1. Fork the repo
2. Open a branch: `git checkout -b feat/my-change`
3. Commit and push, then open a PR

## License

No license file is included. Add one (for example `MIT`) if you intend to publish.

---

Want anything else added to the README? I can add badges, runtime version recommendations, a `CONTRIBUTING.md`, or example commands for common tasks.
