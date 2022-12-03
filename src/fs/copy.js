import fs from 'fs';
import path from 'path';
import { readdir } from 'fs/promises';

const copy = async () => {
  const fsPromises = fs.promises;
  const pathDirCopy = path.join(__dirname, 'files_copy');
  const pathDir = path.join(__dirname, 'files');
  
  fs.access(pathDirCopy, fs.F_OK, (err) => {
    if (!err) {
      delFiles().then(createDirItems(pathDir, pathDirCopy));
    } else {
      fsPromises.mkdir(pathDirCopy).then(createDirItems(pathDir, pathDirCopy));
    }
  });

  async function delFiles() {
    const files = await readdir(pathDirCopy);
    for (const file of files) {
      let filePath = path.join(pathDirCopy, file);
      fs.unlink(filePath, (err => { if (err) throw err; }));
    }
  };

  async function createDirItems(inPath, outPath) {
    const files = await readdir(inPath);
    for (const file of files) {
      fs.copyFile(path.join(inPath, `${file}`), path.join(outPath, `${file}`), (err) => {
        if (err) throw err;
      });
    }
  };
};

copy();