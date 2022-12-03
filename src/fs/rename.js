import fs from 'fs';

const rename = async () => {
  fs.rename('properFilename', 'wrongFilename.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed.');
  });
};

await rename();