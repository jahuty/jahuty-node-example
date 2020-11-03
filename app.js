var express = require('express');
var app     = express();
var { Jahuty, Snippet }  = require('@jahuty/jahuty');

Jahuty.setKey('kn2Kj5ijmT2pH6ZKqAQyNexUqKeRM4VG6DDgWN1lIcc');

app.get('/', function (req, res) {
  Snippet.render(1)
    .then(render => { res.send(`<h1>Welcome to Jahuty!</h1>${render.content}`) })
    .catch(error => console.error(error));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
