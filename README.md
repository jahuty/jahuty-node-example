# jahuty-node-example

An example Node application using [Jahuty's Node SDK](https://github.com/jahuty/jahuty-node).

## Checking your environment

Before you get started, let's make sure you have Node.js installed.

Verify you have Node.js installed:

```bash
$ node -v
```

The command above should produce the following output:

```bash
v14.12.0
```

If you don't have Node.js installed or you have a lower version, [download the lastest version](https://nodejs.org/en/download/).

## Installing the application

Let's install the application (aka, "clone the repository") onto your local machine.

Change to your destination directory (for this example, we'll be using our "home directory"):

```bash
$ cd ~
```

Clone the repository into your destination directory:

```bash
~ $ git clone https://github.com/jahuty/jahuty-node-example.git
```

This command will create a `jahuty-node-example` in the current directory.

Change into the repository's root directory:

```bash
~ $ cd jahuty-node-example
```

Now, you need to install the application's dependencies using Node Package Manager (NPM).

```bash
~/jahuty-node-example $ npm install
```

This will output several lines to your screen as NPM installs the application's dependencies.

When it's done (and it may take a few minutes), you're ready to start the application!

## Starting the application

Start the server from the repository's directory using Express:

```
~/jahuty-node-example $ node app.js
```

This should produce output similar to the following:

```bash
~/jahuty-node-example $ node app.js
Example app listening on port 3000!
```

## Running the example

Now, it's time to run the default example.

Navigate to http://localhost:3000, and you should see the following:

![Jahuty example](https://github.com/jahuty/jahuty-node-example/blob/master/example.png)

In this example, we're retrieving the "default" snippet (i.e., the snippet we control for system tests). We instantiated our client with our (public) API key and retrieved the snippet with an id of 1 in `app.js`.

## Customizing the example

Ready to use your own snippet?

If you haven't already, [sign up](https://app.jahuty.com/users/sign_up).

Replace the default API key in `app.js` with the temporary API key we emailed you:

```js
// app.js

// ...
const jahuty = new Client({ apiKey: YOUR_API_KEY });
```

Replace the snippet `id` with your snippet's id.

```js
// app.js

// ...
const render = await jahuty.snippets.render(YOUR_SNIPPET_ID);
```

Stop the node app, restart it, and refresh the page. You should see your snippet's content in the document!

If you have questions, try [our documentation](https://docs.jahuty.com) or feel free too [ask us a question](https://www.jahuty.com/contact).

We hope you enjoy using [Jahuty](https://www.jahuty.com/) to stop worrying about content changes, and we're excited to partner with you!
