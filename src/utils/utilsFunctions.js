const fs = require('fs/promises');
const crypto = require('crypto');

const getTalkers = async () => {
  const talkersArray = await fs.readFile('src/talker.json', 'utf8');
  return JSON.parse(talkersArray);
};

const getATalker = (id, array) => {
  const talker = array.find((obj) => Number(id) === Number(obj.id));
  return talker;
};

const generateToken = () => crypto.randomBytes(8).toString('hex');

const insertTalker = async (talker) => {
  const oldTalkers = await getTalkers();
  oldTalkers.push(talker);
  return fs.writeFile('src/talker.json', JSON.stringify(oldTalkers));
};

const getNextTalkerId = async () => {
  const talkers = await getTalkers();
  const lastId = talkers[talkers.length - 1].id;
  const newId = Number(lastId) + 1;
  return newId;
};

const updateTalker = async (id, newTalker) => {
  const talkers = await getTalkers();
  const equalTalkers = talkers.filter((obj) => Number(obj.id) !== Number(id));
  const talkerUpdated = { id, ...newTalker };
  const newTalkers = [...equalTalkers, talkerUpdated];
  const sortedTalkers = newTalkers.sort((a, b) => Number(a.id) - Number(b.id));
  await fs.writeFile('src/talker.json', JSON.stringify(sortedTalkers));
  return talkerUpdated;
};

const deleteTalker = async (id) => {
  const numberId = Number(id);
  const allTalkers = await getTalkers();
  const newTalkers = allTalkers.filter((obj) => Number(obj.id) !== numberId);
  await fs.writeFile('src/talker.json', JSON.stringify(newTalkers));
};

const searchTalkerByName = async (term) => {
  const allTalkers = await getTalkers();
  if (!term) return allTalkers;
  const filteredTalkers = allTalkers.filter((obj) => (
    obj.name.toLowerCase().includes(term.toLowerCase())
  ));
  return filteredTalkers;
};

module.exports = {
  getTalkers,
  getATalker,
  generateToken,
  insertTalker,
  getNextTalkerId,
  updateTalker,
  deleteTalker,
  searchTalkerByName,
};