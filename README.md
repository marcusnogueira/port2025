# Marcus Nogueira – Personal Portfolio

This is a personal portfolio web app built with React, TypeScript, Vite, and Tailwind CSS. It showcases my background as a creative technologist and quantitative researcher, including:
- Professional experience and education
- Featured and other projects
- Skills and areas of expertise
- Contact and social links

The site is designed to be modern, responsive, and easily deployable (e.g., to Vercel). All content is personalized and maintained in a structured data file for easy updates.

---

# Portfolio App

## Local Development

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (or as indicated in the terminal).

## Building for Production

To build the app for production:
```sh
npm run build
```
To preview the production build locally:
```sh
npm run preview
```

## Deploying to Vercel

This project is compatible with [Vercel](https://vercel.com/):
- No special configuration is required for a standard Vite React app.
- Vercel will detect the framework and use the following settings:
  - **Build Command:** `npm run build`
  - **Output Directory:** `dist`
- You can deploy by connecting your GitHub repo to Vercel and importing the project.

If you need custom settings, create a `vercel.json` in the root with:
```json
{
  "builds": [
    { "src": "MRN_PORT_WEB/package.json", "use": "@vercel/static-build", "config": { "distDir": "dist" } }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

---

### Cleaned Template
All references to 'Lovable' and template/demo content have been removed. This project is now fully personalized and ready for deployment.

### Fixes applied:

1. **npm error: Missing script: "build"**
   - You must run `npm run build` (or `npm run dev`) from inside the `MRN_PORT_WEB` directory:
     ```sh
     cd MRN_PORT_WEB
     npm run build
     ```
   - Your scripts are present in `MRN_PORT_WEB/package.json`, so running from the correct directory will work.

2. **CSS Safari compatibility**
   - Added `-webkit-backdrop-filter: blur(20px);` to `.glass-card` in your CSS for Safari/iOS support.

---

You can now:
- Build or run your app from the correct directory.
- Enjoy improved cross-browser support for your glass effect.

If you want, you can now try:
```sh
cd MRN_PORT_WEB
npm run dev
```
or
```sh
npm run build
```
Let me know if you hit any more errors or want to proceed with Vercel deployment!
