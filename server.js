const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

// Routes
app.get('/', (req, res) => {
  res.send("You're a wizard, Harry!");
});

// PARAMS
app.get('/message/:id', (request, response) => {
  console.log(`Getting a message with the id of ${request.params.id}`);
  response.send({ msg: `Message with an id of ${request.params.id} found` });
});

// QUERY
app.get('/find', (request, response) => {
  console.log(`Finding someone with a name of ${request.query.myName} and an age of ${request.query.myAge}`);
  response.send({
    msg: `${request.query.myName} is ${request.query.myAge} years old.`,
  });
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
