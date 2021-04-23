const express = require('express');
const Client = require('@jahuty/jahuty').default;

const app = express();

/**
 * The examples below utilize our "system test" setup:
 *
 *   - The "system test" organization exists in Jahuty with an API key.
 *   - The organization has two snippets, 1, a static phrase, and 62, a phrase
 *     with two variables: foo and bar.
 *   - The organiation has a tag, "test", which has been applied to both
 *     snippets.
 *
 * @see  https://docs.jahuty.com/components/organizations
 * @see  https://docs.jahuty.com/components/api-keys
 * @see  https://docs.jahuty.com/components/snippets
 * @see  https://docs.jahuty.com/liquid/introduction
 * @see  https://docs.jahuty.com/components/tags
 */

const jahuty = new Client({
  apiKey: 'kn2Kj5ijmT2pH6ZKqAQyNexUqKeRM4VG6DDgWN1lIcc',
});

app.get('/snippet', async (req, res) => {
  const render = await jahuty.snippets.render(1);

  res.send(`${render.content}`);
});

app.get('/snippet-from-cache', async (req, res) => {
  // Warm the in-memory cache. Subsequent renders of the same snippet with the
  // same params will use the cached value for the duration of the request.
  await jahuty.snippets.render(1);

  const render = await jahuty.snippets.render(1);

  res.send(`${render.content}`);
});

app.get('/snippet-with-params', async (req, res) => {
  const render = await jahuty.snippets.render(62, {
    params: { foo: 'foo', bar: 'bar' },
  });

  res.send(`${render.content}`);
});

app.get('/snippets', async (req, res) => {
  const renders = await jahuty.snippets.allRenders('test');

  // Note, the second snippet in the collection, 62, expects two variables,
  // `foo` and `bar`, which have not been passed, causing Jahuty to render ""
  // in their place.
  res.send(`${renders[0].content} ${renders[1].content}`);
});

app.get('/snippets-from-cache', async (req, res) => {
  // Warm the in-memory cache.
  await jahuty.snippets.allRenders('test');

  const render1 = await jahuty.snippets.render(1);
  const render62 = await jahuty.snippets.render(62);

  res.send(`${render1.content} ${render62.content}`);
});

app.get('/snippets-with-params', async (req, res) => {
  // Note the slightly different syntax for the "params" option here. The params
  // are indexed by snippet id, and the special "*" key is used to pass params
  // to all snippets in the collection.
  await jahuty.snippets.allRenders('test', {
    params: {
      '*': { foo: 'foo' },
      62: { bar: 'bar' },
    },
  });

  const render1 = await jahuty.snippets.render(1);
  const render62 = await jahuty.snippets.render(62, {
    params: { foo: 'foo', bar: 'bar' },
  });

  res.send(`${render1.content} ${render62.content}`);
});

module.exports = app;
