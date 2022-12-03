import fs from 'fs';
import path from 'path';
const read = async () => {
  const filePathIn = path.join(__dirname, './files/fileToRead.txt');
  let readStream = new fs.ReadStream(filePathIn, 'utf8');
  readStream.on('data', function (chunk) { console.log(chunk); });
  readStream.on('error', function (err) {
    (err.code == 'ENOENT') ? console.log("file not found") : console.error(err);
  });
};

await read();