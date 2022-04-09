const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3001;
const app = express();
const words = require('./data/words');
const gamesPlayed = require('./data/gamesPlayed');

app.locals = {
  title: 'Turdle API',
  words,
  gamesPlayed
}

app.use(cors());
app.use(express.json());

app.get('/api/v1/words', (req, res) => {
  res.status(200).json(app.locals.words);
});

app.get('/api/v1/games', (req, res) => {
  res.status(200).json(app.locals.gamesPlayed);
});

app.post('/api/v1/games', (req, res) => {
  const { solved, guesses } = req.body;

  for (let requiredParameter of ['solved', 'guesses']) {
    if (req.body[requiredParameter] === undefined) {
      return res.status(422).json({
        message: `You are missing a required parameter of ${requiredParameter}`
      });
    }
  }

  if (solved !== true && solved !== false) {
    return res.status(422).json({
      message: `The parameter solved must be a boolean.`
    });
  }

  if (!(guesses < 7 && guesses > 0 && guesses % 1 === 0)) {
    return res.status(422).json({
      message: `The parameter guesses must be a whole number between 1 and 6.`
    });
  }

  gamesPlayed.push({
    solved: solved,
    numGuesses: guesses
  });

  return res.status(201).json({
    message: `Game stats recorded successfully.`
  });
});

app.listen(port, () => {
  console.log(`${app.locals.title} is now running on http://localhost:${port} !`)
});
