const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const sourceHtml = path.join(rootDir, 'index.source.html');
const rootHtml = path.join(rootDir, 'index.html');
const distDir = path.join(rootDir, 'dist');
const distHtml = path.join(distDir, 'index.html');
const distAssets = path.join(distDir, 'assets');
const rootAssets = path.join(rootDir, 'assets');

// 1. Ensure source template is in place for Vite build
if (fs.existsSync(sourceHtml)) {
  fs.copyFileSync(sourceHtml, rootHtml);
}

// 2. Run Vite build
console.log('> Running vite build...');
execSync('npx vite build', { stdio: 'inherit', cwd: rootDir });

// 3. Copy compiled dist/index.html and dist/assets to root
if (fs.existsSync(distHtml)) {
  fs.copyFileSync(distHtml, rootHtml);
  console.log('✓ Successfully deployed compiled index.html to repository root');
}
if (fs.existsSync(distAssets)) {
  fs.mkdirSync(rootAssets, { recursive: true });
  fs.cpSync(distAssets, rootAssets, { recursive: true });
  console.log('✓ Successfully deployed assets/ to repository root');
}
