import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const filesToCopy = ['index.html', 'ads.txt', '.htaccess'];
const targetDirs = ['out', 'dist', 'build'];

for (const dirName of targetDirs) {
  const targetPath = path.join(rootDir, dirName);
  try {
    if (!fs.existsSync(targetPath)) {
      fs.mkdirSync(targetPath, { recursive: true });
    }
    for (const file of filesToCopy) {
      const srcFile = path.join(rootDir, file);
      const destFile = path.join(targetPath, file);
      if (fs.existsSync(srcFile)) {
        fs.copyFileSync(srcFile, destFile);
      }
    }
  } catch (err) {
    console.warn(`Warning preparing ${dirName}:`, err);
  }
}

console.log('Hostinger output directories (out, dist, build, public_html root) prepared.');
