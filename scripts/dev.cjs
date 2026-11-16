const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const sourceHtml = path.join(rootDir, 'index.source.html');
const rootHtml = path.join(rootDir, 'index.html');

if (fs.existsSync(sourceHtml)) {
  fs.copyFileSync(sourceHtml, rootHtml);
}

const child = spawn('npx', ['vite'], { stdio: 'inherit', shell: true, cwd: rootDir });
child.on('exit', (code) => process.exit(code || 0));
