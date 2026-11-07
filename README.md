# Boktiyer Hossen — Portfolio Website

My personal portfolio, built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion** and **Lucide icons**.

---

## 1. Run the website on your computer

Open a terminal in this folder (in VS Code: **Terminal → New Terminal**) and run:

```bash
npm install      # downloads all the packages (only needed once)
npm run dev      # starts the development server
```

Open **http://localhost:3000** in your browser. When you save a file, the page updates by itself.
Press `Ctrl + C` in the terminal to stop the server.

Other useful commands:

| Command | What it does |
|---|---|
| `npm run build` | Builds the final, optimized website (this is what Vercel runs) |
| `npm start` | Runs the built website (run `npm run build` first) |
| `npm run lint` | Checks the code for mistakes |
| `npm run typecheck` | Checks TypeScript types |

---

## 2. Project structure

```
src/
  app/
    layout.tsx            ← page shell: fonts, SEO metadata, <html>/<body>
    page.tsx              ← home page: puts all sections in order
    globals.css           ← Maroon color theme + global styles
    favicon.ico           ← browser-tab icon (BH)
    icon.svg              ← sharp BH icon for modern browsers
    apple-icon.png        ← icon for iPhone home screens
    opengraph-image.tsx   ← preview image when your link is shared
    robots.ts, sitemap.ts ← help Google find your site
    not-found.tsx         ← custom 404 page
    api/contact/route.ts  ← server code that emails you contact-form messages
  components/             ← reusable pieces (Navbar, Footer, Reveal animation…)
  sections/               ← one file per section (Hero, About, Skills…)
  data/                   ← ✏️ YOUR CONTENT — edit these files
  lib/                    ← helper code (form validation)
public/
  images/profile.png      ← 📷 your photo
  resume/cv.pdf           ← 📄 your CV
```

**To change any text on the site, edit the files in `src/data/`** — you don't need to touch the components.

---

## 3. Add your own photo, CV and links

### Profile photo
1. Pick a clear photo of yourself — ideally **square** (e.g. 800×800 px), face near the top-center.
2. Rename it to exactly **`profile.png`**.
3. Replace the file at **`public/images/profile.png`** (delete the placeholder, paste yours).
4. Using a `.jpg`? Either convert it to PNG, or keep the `.jpg` and change `profileImage` in `src/data/site.ts` to `"/images/profile.jpg"`.

### CV
1. Export your CV as a PDF.
2. Rename it to exactly **`cv.pdf`**.
3. Replace the file at **`public/resume/cv.pdf`**.

The **Download CV** button will download it as `Boktiyer-Hossen-CV.pdf`.

### Links and email
Open **`src/data/site.ts`** and replace the placeholder values:
- `email` → your email address
- `socials.github` → your GitHub profile URL
- `socials.linkedin` → your LinkedIn profile URL
- `repoUrl` → this project's GitHub URL (after Step 4)

### Projects
Open **`src/data/projects.ts`** — there is a commented example you can copy for each new project.
Optional screenshots go in `public/images/projects/`.

---

## 4. Upload the project to GitHub

1. Create a free account at **https://github.com** (if you don't have one).
2. Click **+ → New repository**. Name it `boktiyer-hossen-portfolio`, keep it **Public**,
   and **do not** tick "Add a README" (we already have one). Click **Create repository**.
3. Tell git who you are (only once per computer):
   ```bash
   git config --global user.name "Boktiyer Hossen"
   git config --global user.email "the-email-you-used-on-github@example.com"
   ```
4. In this project folder, run:
   ```bash
   git init                       # start tracking this folder with git
   git add .                      # select all files (.gitignore skips node_modules etc.)
   git commit -m "Initial commit: portfolio website"   # save a snapshot
   git branch -M main             # name the main branch "main"
   git remote add origin https://github.com/YOUR-USERNAME/boktiyer-hossen-portfolio.git
   git push -u origin main        # upload to GitHub
   ```
   A browser window may open asking you to sign in to GitHub — approve it.
5. Refresh your GitHub page — your code is there.

**Every time you make changes later:**
```bash
git add .
git commit -m "Describe what you changed"
git push
```

---

## 5. Deploy on Vercel (make it public)

1. Go to **https://vercel.com** → **Sign Up** → **Continue with GitHub**.
2. Click **Add New… → Project**.
3. Find `boktiyer-hossen-portfolio` and click **Import**.
4. Vercel detects Next.js automatically — leave the settings as they are and click **Deploy**.
5. After about a minute you get a public link like `https://boktiyer-hossen-portfolio.vercel.app`. 🎉

**Automatic updates:** every `git push` to GitHub makes Vercel rebuild and update your live site.

### Optional settings (Vercel → your project → Settings → Environment Variables)

| Name | Value | Why |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://your-site.vercel.app` | Correct links for SEO and social previews (Vercel's own URL is used automatically if you skip this) |
| `RESEND_API_KEY` | key from resend.com | Lets the contact form send email |
| `CONTACT_TO_EMAIL` | your email | Where contact messages arrive |

After adding variables, go to **Deployments → ⋯ → Redeploy** so they take effect.

### Turn on the contact form (free)
1. Sign up at **https://resend.com** **using the same email you want messages sent to**
   (the free plan without your own domain can only send to your sign-up email).
2. Go to **API Keys → Create API Key** and copy it.
3. Add `RESEND_API_KEY` and `CONTACT_TO_EMAIL` in Vercel (table above) and redeploy.

Until this is set up, the form still validates everything and shows visitors your email address instead.

To test the form on your computer, copy `.env.example` to `.env.local`, fill in the values and restart `npm run dev`.
(`.env.local` is never uploaded to GitHub — keep your keys secret.)

### Custom domain (optional)
Bought a domain (e.g. `boktiyerhossen.com`)? In Vercel go to **Settings → Domains → Add** and follow the DNS instructions.
