# Java Foundations — node-based Java course (static, S3-ready)

Target: **Java 17 (LTS)** · absolute beginners · no backend · progress in localStorage.

## Develop

```bash
node build.mjs        # generates dist/
node dev-server.mjs --dist   # preview at http://localhost:8080
```

Source: `src/data/curriculum.js` (graph, stable node ids), `src/data/lessons-*.js` (content),
`src/js/*` (progress, quiz, animations, graph), `src/css/main.css`, `build.mjs` (static generator).

## Deploy to S3 static hosting

1. Build: `node build.mjs` → `dist/` holds only deployable HTML/CSS/JS/JSON (no secrets).
2. Create bucket, enable **Static website hosting**, index document `index.html`, error document `error.html`.
3. Upload `dist/*` preserving paths. MIME: `.html` text/html, `.css` text/css, `.js` text/javascript, `.json` application/json.
4. Cache: HTML short (`max-age=300`), hashed-free assets long — filenames are stable, so prefer short cache or version on change.
5. Relative-safe paths: pages use relative `../assets/…` links; works under a sub-path (e.g. `/courses/java/`) with no changes. Every lesson is a real `.html` file, so refresh/deep-links work without SPA fallback.
6. HTTPS + custom domain: put **CloudFront** in front of the bucket (S3 website endpoint as origin), attach ACM cert.

No Node server in production. Optional future `window.JAVA_RUNNER_URL` can point at an isolated Java execution service (timeouts, output limits, no credentials in static files).
