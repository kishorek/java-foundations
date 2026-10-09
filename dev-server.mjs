import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
const root = new URL(process.argv.includes('--dist') ? './dist/' : './', import.meta.url).pathname;
const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.txt': 'text/plain' };
createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  try {
    const data = await readFile(join(root, p.slice(1)));
    res.writeHead(200, { 'Content-Type': MIME[extname(p)] || 'application/octet-stream' });
    res.end(data);
  } catch {
    try {
      const e = await readFile(join(root, 'error.html'));
      res.writeHead(404, { 'Content-Type': 'text/html' }); res.end(e);
    } catch { res.writeHead(404); res.end('not found'); }
  }
}).listen(8080, () => console.log('Serving', root, 'at http://localhost:8080'));
