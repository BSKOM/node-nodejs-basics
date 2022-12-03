import fs from 'fs';
import path from 'path';

const remove = async () => {
  const filePath = path.join(__dirname, './files/fileToRemove.txt');
  fs.unlink(filePath, (err => { if (err) throw err; }));
};

await remove();
