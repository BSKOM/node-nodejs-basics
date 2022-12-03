import process from 'process';

const parseArgs = () => {
  const myArgs = process.argv.slice(2).filter((el) => (el.startsWith('--')));
  const myVals = process.argv.slice(2).filter((el) => !(el.startsWith('--')));
  const res = myArgs.map((el, i) => `${el.replace('--','')} is ${myVals[i]}` ).join(', ');
  console.log(res);
};

parseArgs();