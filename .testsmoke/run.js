const { promises: fs } = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), '.next', 'static');

async function findHtmlFiles(dir, files = []) {
  let entries;
  try { entries = await fs.readdir(dir, { withFileTypes: true }); } catch (e) { return files; }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await findHtmlFiles(full, files);
    else if (entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

(async () => {
  const files = await findHtmlFiles(outDir);
  if (!files.length) {
    console.error('Smoke test failed: no generated HTML found in .next/static');
    process.exit(1);
  }
  const largest = files.sort((a, b) => (await fs.stat(b).then(s => s.size)) - (await fs.stat(a).then(s => s.size)))[0];
  const html = await fs.readFile(largest, 'utf8');
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);

  let ok = true;
  if (titleMatch) console.log('title:', titleMatch[1].trim());
  else { console.error('Smoke test failed: title missing'); ok = false; }
  if (h1Match) console.log('h1:', h1Match[1].trim());
  else { console.error('Smoke test failed: h1 missing'); ok = false; }

  if (!ok) process.exit(1);
  console.log('Smoke test passed');
})();
