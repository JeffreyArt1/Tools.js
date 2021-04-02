// a tool that makes hashes
const hashMaker = (length) => {
  length = length <= 0 ? 1 : length;
  const generate = () =>
    parseInt(Math.random().toString().substring(2, this.length)).toString(16);
  let a = '';
  while (a.length < length) a += generate();
  return a.slice(0, length);
};
