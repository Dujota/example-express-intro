/* eslint-disable prefer-destructuring */
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
  console.log(`Finding someone with a name of ${request.query.myAge.myName} and an age of ${request.query.myAge}`);
  response.send({
    msg: `${request.query.myName} is ${request.query.myAge} years old.`,
  });
});

app.post('/test', (req, res) => {
  console.log('data', req.data);
  console.log('body', req.body);
  const formData = {};
  // req.on('data', (data) => {
  //   const parsedData = decodeURIComponent(data).split('&');
  //   console.log(parsedData);

  //   for (const data of parsedData) {
  //     const decodedData = decodeURIComponent(data.replace(/\+/g, '%20'));

  //     const [key, value] = decodedData.split('=');

  //     // Accumulate submitted
  //     // data in an object
  //     formData[key] = value;
  //   }
  // });

  res.send({ formData });
});

app.get('/dogs', (req, res, next) => {
  res.send('My fav dog is poddle');
});

app.get('/cats/:catName', (req, res) => {
  const catName = req.params.catName;
  res.send({ catName });
});

app.post('/towns', (req, res) => {
  const hometown = req.body.town;
  res.send({ hometown });
});

app.put('/profile/update/:username', (req, res) => {
  res.send(`User profile with the username of ${req.params.username} was updated`);
});

app.delete('/tacos', (req, res) => {
  const tacoId = req.query.tacoId;
  const type = req.query.type;
  res.send(`I deleted the ${type} with an id of ${tacoId}`);
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
