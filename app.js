const express = require('express');
const Client  = require('@jahuty/jahuty').default;

const app = express();

const jahuty = new Client({ apiKey: 'kn2Kj5ijmT2pH6ZKqAQyNexUqKeRM4VG6DDgWN1lIcc' });

app.get('/', async function (req, res) {
  const render = await jahuty.snippets.render(1);

  res.send(`<h1>Welcome to Jahuty!</h1>${render.content}`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
