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

When it's done (and it may take a few minutes), you're ready to test the application.

## Running the tests

Let's make sure your installation is working before we start it.

Run the application's test suite with the following:

```
~/jahuty-node-example $ npx jest
```

If all the tests pass, you're ready to start the application!

## Starting the application

Start the server from the repository's directory using Express:

```
~/jahuty-node-example $ node server.js
```

This should produce output similar to the following:

```bash
~/jahuty-node-example $ node server.js
Example app listening on port 3000!
```

## Running the example

Now, it's time to run the default example.

Navigate to http://localhost:3000/snippet, and you should see the following:

![Jahuty example](https://github.com/jahuty/jahuty-node-example/blob/master/example.png)

## Customizing the examples

Our examples use snippets that we control. Of course, it's more fun if you use your own.

If you haven't already, [sign up](https://app.jahuty.com/sign-up), and we'll provision your account with an organization, an API key, and a welcome snippet.

To use your snippets in the examples, open `app.js`:

1. Change the API key.
1. Change the snippet id.

Restart the server, refresh the page, and you should see your snippet's content in the document!

## That's it!

If you have questions, try [our documentation](https://docs.jahuty.com) or feel free too [ask us a question](https://www.jahuty.com/contact).

We hope you enjoy using [Jahuty](https://www.jahuty.com/) to manage content productively, and we're excited to partner with you!
