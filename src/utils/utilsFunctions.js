const fs = require('fs/promises');

const getTalkers = async () => {
  const talkersArray = await fs.readFile('src/talker.json', 'utf8');
  return JSON.parse(talkersArray);
};

module.exports = {
  getTalkers,
};