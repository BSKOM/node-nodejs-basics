import fs from 'fs';
import path from 'path';

const create = async () => {
  const filePathOut = path.join(__dirname, './files/text.txt');
  const data = 'I am fresh and young';
  fs.open(filePathOut, 'r', function (errEx, _) {
    if (errEx) {

      fs.writeFile(filePathOut, data, (err) => {
        if (err) throw  new Error('write err'); 
        console.log('Data written');
      });

    } else {
      throw new Error('FS operation failed');
    }
  });
};

await create();