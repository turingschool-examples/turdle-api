# turdle-api

This repo is associated with the [Refactor Tractor - 1 Day Challenge activity](https://frontend.turing.edu/projects/module-2/refactor-tractor-1day-turdle.html).

## Set Up

Clone this down into a separate directory from the front-end repo, and `cd` into it.  Then run:

`npm install`

`npm start`

## Endpoints

| Description | URL | Method | Required Properties for Request Body | Sample Successful Response |
|----------|-----|--------|---------------------|-----------------|
| Get all words (iteration 2) |`http://localhost:3001/api/v1/words`| GET  | none | An array containing all words |
| Add a new game stat (iteration 4)|`http://localhost:3001/api/v1/games`| POST | `{ solved: <boolean (did they solve the puzzle?)>, guesses: <number (how many guesses did they make?)> }` | `{message: 'Game stats recorded successfully.' }`|
| Get all previous games stats (iteration 4) |`http://localhost:3001/api/v1/games` | GET  | none | An array containing game stats for all previous games (will be empty until you POST)|
