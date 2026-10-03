# Profile site

Personal site for Mirza Tontowi. Plain HTML and CSS, hosted on GitHub Pages. No build step.

## Before going live

1. **Email:** change the one line at the top of `assets/site.js` to your real address.
2. **Photo (optional):** add a square photo as `assets/photo.jpg`. Until then, the page shows your initials.

## Turn on GitHub Pages

1. Push this folder to `github.com/mhtontowi/profile`.
2. On GitHub, go to **Settings → Pages**. Under **Build and deployment**, pick **Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
3. The site appears at `https://mhtontowi.github.io/profile/` within a few minutes.

## Connect your domain

Do these in this order, so nobody else can claim the domain on GitHub:

1. **Verify the domain** in your GitHub account: **Settings (your profile) → Pages → Add a domain**. GitHub gives you a TXT record to add at your registrar.
2. **Add the domain to the repo:** **Settings → Pages → Custom domain**, type it, **Save**. GitHub creates a `CNAME` file in the repo; pull it afterwards (`git pull`).
3. **Add DNS records at your registrar:**
   - Four `A` records for the bare domain (`@`): `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Optional `AAAA` records: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - One `CNAME` record for `www` pointing to `mhtontowi.github.io`
4. When the DNS check passes, tick **Enforce HTTPS**.

Source: [GitHub Docs, managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

Your email (MX, SPF, DKIM, DMARC records) is separate from these records. Your email provider gives you those.
# profile
