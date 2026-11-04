# Susheel Kumar — portfolio

Professional HR portfolio for [hrsk.in](https://hrsk.in).

Sections: Home, Core HR Expertise, Professional Experience, and a contact form.
Direct links: LinkedIn, email, Facebook, and WhatsApp.

## Run locally

```bash
npm install
npm run dev
```

The site is served on port 8080.

## Production build

```bash
npm run build
```

## Hostinger

This is a Node.js application (Vite and TanStack Start), not a folder of plain HTML files.

In hPanel, open **Websites → Node.js → Create application**, connect the GitHub repository `susheeljsr/my-hostinger-website`, then use:

- Install command: `npm install`
- Build command: `npm run build`
- Start command: `npm run dev`

Set the application port to **8080**, which is the port this project listens on.

Shared PHP hosting that only publishes `public_html` cannot run this app. Use Hostinger’s Node.js app, or point the domain at a host that runs Node.
