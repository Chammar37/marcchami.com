# marcchami.com
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Cloudflare Pages

This project is configured for static export and deploys to [Cloudflare Pages](https://pages.cloudflare.com/) (marcchami.com).

### Deploy with Wrangler (CLI)

From the app directory (where `package.json` and `wrangler.toml` live):

1. Install dependencies: `npm install`
2. Log in to Cloudflare: `npx wrangler login`
3. Create the Pages project (first time only): `npx wrangler pages project create marcchami-com`
4. Deploy: `npm run deploy`

This builds the site and uploads the `out` directory to the **marcchami-com** Pages project. Configure the custom domain marcchami.com in **Workers & Pages** > **marcchami-com** > **Custom domains**.

### Deploy with Git integration

1. Push your code to GitHub/GitLab.
2. In [Cloudflare Dashboard](https://dash.cloudflare.com/) go to **Workers & Pages** > **Create** > **Pages** > **Connect to Git**.
3. Select your repo and set **Root directory:** `marcchami.com`, **Build command:** `npm run build`, **Build output directory:** `marcchami.com/out` (path from repo root).
4. Add custom domain marcchami.com in the project settings.
