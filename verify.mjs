/* Verify lesson code samples: compile with --release 17, run non-interactive ones, compare outputs. */
import { LESSONS_A } from './src/data/lessons-a.js';
import { LESSONS_B } from './src/data/lessons-b.js';
import { LESSONS_C } from './src/data/lessons-c.js';
import { LESSONS_E } from './src/data/lessons-e.js';
import { LESSONS_D } from './src/data/lessons-d.js';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const LESSONS = { ...LESSONS_A, ...LESSONS_B, ...LESSONS_C, ...LESSONS_D, ...LESSONS_E };
const norm = s => String(s ?? '').replace(/\r\n/g, '\n').trim().replace(/ +$/gm, '');

function toProgram(code) {
  const lines = code.split('\n');
  const imports = lines.filter(l => l.trim().startsWith('import '));
  const rest = lines.filter(l => !l.trim().startsWith('import ')).join('\n');
  // strip comment-only lines starting with // javac // java (shell hints)
  const body = rest.split('\n').filter(l => !/^\s*\/\/( javac| java)/.test(l)).join('\n');
  if (/class\s+\w+/.test(body) && /main\s*\(/.test(body)) {
    return { prog: [...imports, body].join('\n'), full: true };
  }
  return { prog: [...imports, 'public class T {', 'public static void main(String[] args) {', body, '}', '}'].join('\n'), full: false };
}

let ok = 0, compFail = [], outMiss = [], skipped = [], frag = [];
for (const [id, L] of Object.entries(LESSONS)) {
  if (!L.code) { skipped.push(id + ':nocode'); continue; }
  if (L.lang && L.lang !== 'java') { skipped.push(id + ':lang-' + L.lang); continue; }
  const { prog, full } = toProgram(L.code);
  if (!full) { skipped.push(id + ':simulated-fragment'); continue; }
  const dir = mkdtempSync(join(tmpdir(), 'jv-'));
  const mName = (prog.match(/^\s*(public\s+)?class\s+(\w+)/m) || [])[2] || 'T';
  const fname = /^[A-Z][\w]*$/.test(mName) ? mName : 'T';
  const src = fname === 'T' ? prog : prog;
  try {
    writeFileSync(join(dir, fname + '.java'), prog.replace(/^package\s+[\w.]+;/m, ''));
  } catch (e) { compFail.push([id, 'write']); rmSync(dir, { recursive: true, force: true }); continue; }
  try {
    execFileSync('javac', ['--release', '17', join(dir, fname + '.java')], { stdio: 'pipe', timeout: 20000 });
  } catch (e) {
    compFail.push([id, String(e.stderr || e.message).split('\n').slice(0, 4).join(' | ')]);
    rmSync(dir, { recursive: true, force: true });
    continue;
  }
  if (/System\.in/.test(prog) || L.interactive) { skipped.push(id + ':interactive-compile-only'); try { execFileSync('javac', ['--release', '17', join(dir, fname + '.java')], { stdio: 'pipe', timeout: 20000 }); ok++; } catch (e) { compFail.push([id, 'interactive-compile: ' + String(e.stderr || e.message).split('\n').slice(0, 3).join(' | ')]); } rmSync(dir, { recursive: true, force: true }); continue; }
  try {
    const out = execFileSync('java', ['-cp', dir, fname], { stdio: 'pipe', timeout: 10000, encoding: 'utf8' });
    if (norm(out) === norm(L.output)) ok++;
    else outMiss.push([id, 'got:' + JSON.stringify(norm(out)).slice(0, 120) + ' want:' + JSON.stringify(norm(L.output)).slice(0, 120)]);
  } catch (e) { outMiss.push([id, 'run-err:' + String(e.message).slice(0, 100)]); }
  rmSync(dir, { recursive: true, force: true });
}
console.log(`COMPILE-RUN OK: ${ok}/${Object.keys(LESSONS).length}`);
console.log('FRAGMENTS (not full programs):', frag.length, frag.join(','));
console.log('COMPILE FAILURES:'); compFail.forEach(([i, e]) => console.log(' ', i, '::', e));
console.log('OUTPUT MISMATCHES:'); outMiss.forEach(([i, e]) => console.log(' ', i, '::', e));
console.log('SKIPPED:', skipped.join(','));
