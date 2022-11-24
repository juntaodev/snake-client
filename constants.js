const host = '165.227.47.243';
const port = 50541;
const name = process.argv[2];
const movement = {
  w: 'up',
  a: 'left',
  s: 'down',
  d: 'right'
};
const messages = {
  1: 'WHATUP!',
  2: 'LETS GO!',
  3: 'SEEYA!'
};

module.exports = { host, port, name, movement, messages };