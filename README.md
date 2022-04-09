# turdle-api

This repo was created to be used with the Refactor Tractor - Turdle project.

## Set Up

Clone this down, and `cd` into it.  Then run:

`npm install`

`npm start`

## Endpoints

| Description | URL | Method | Required Properties for Request | Sample Successful Response |
|----------|-----|--------|---------------------|-----------------|
| Get all words |`http://localhost:3001/api/v1/words`| GET  | none | An array containing all words |
| Get all previous games stats |`http://localhost:3001/api/v1/games` | GET  | none | An array containing game stats for all previous games (will be empty until you POST)|
| Add a new game stat |`http://localhost:3001/api/v1/games`| POST | `{ solved: <boolean (did they solve the puzzle?)>, guesses: <number (how many guesses did they make?)> }` | `{message: '"Game stats recorded successfully.' }`|
