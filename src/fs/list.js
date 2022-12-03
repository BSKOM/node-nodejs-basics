import fs from 'fs';
import path from 'path';
import { readdir } from 'fs/promises';

const list = async () => {
  const dirPath = path.join(__dirname, 'files');
  try {
    const files = await readdir(dirPath);
    for (const file of files) {
      let filePath = path.join(__dirname, 'files', file);
      let extName = path.extname(file);
      let fileBase = path.basename(file, extName);
      fs.stat(filePath, (err, stat) => {
        if (stat.isFile()) {
          (err) ? console.error(err) : console.log(`${fileBase} - ${extName.slice(1,)} - ${stat.size}b`);
        }
      })
    }
  } catch (err) {
    console.error(err);
  }
};

await list();
