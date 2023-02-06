const express = require('express');
const { getTalkers, getATalker } = require('./utils/utilsFunctions');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

// Starting

app.get('/talker', async (req, res) => {
  const talkers = await getTalkers();
  if (!talkers) return res.status(200).json([]);

  res.status(200).json(talkers);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const allTalkers = await getTalkers();
  const choosedTalker = getATalker(id, allTalkers);
  if(!choosedTalker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  res.status(200).json(choosedTalker);
});