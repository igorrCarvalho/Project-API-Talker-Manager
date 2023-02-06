const fs = require('fs/promises');

const getTalkers = async () => {
  const talkersArray = await fs.readFile('src/talker.json', 'utf8');
  return JSON.parse(talkersArray);
};

const getATalker = (id, array) => {
  const talker = array.find((obj) => Number(id) === Number(obj.id));
  return talker;
};

module.exports = {
  getTalkers,
  getATalker,
};