import process from 'process';

const parseEnv = () => {
  
  const rssEnv = Object.entries(process.env).filter(([k, _]) => k.startsWith('RSS_')).map((el) => el.join(' is ')).join(', ');

  console.log(rssEnv);
};

parseEnv();