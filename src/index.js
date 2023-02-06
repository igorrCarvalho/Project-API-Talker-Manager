const express = require('express');
const { getTalkers } = require('./utils/utilsFunctions');

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