AI Playground Prototype
=======================

This prototype is a quick example of how we could build the AI playground.

It's built on NextJS, a React based framework for building full stack web applications. I chose NextJS over a standard
React application because it enables us to write code that is processed on the server side as well as the client.
This enables us to leverage NodeJS on the server to automate indexing the demos as well as securely access the
underlying APIs without exposing private keys to the client.

Getting Started
---------------

First, install the application dependencies:

```bash
npm install
```

Then configure the application environment:

1. Rename `.env.local.example` to `env.local`
2. Add your OpenAI API key to this file

Now you can run it locally:

```bash
npm run dev
```

Once the application is built you can open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Structure
---------

This application is organized into two main directories:

* `src/app`: Routable pages, API endpoints, and assets
* `src/components`: Shared components that are used throughout the application

Demos
-----

> Note that the ChatGPT demo is the only demo that is currently functional

The demo source is located in `src/app/demos/{demo}`. The demos include the following:

* `page.tsx`: This is the routable page that is rendered on the server
* `demo.tsx`: Server rendered pages are not interactive, so the actual demo is rendered with this file
* `config.json`: This is the configuration file that shares the demo settings with the rest of the application
* `api/route.ts`: This is the API that runs on the server and securely integrates with the underlying AI APIs
