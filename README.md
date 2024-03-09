# ts-express-mongo-template

A boilerplate for creating a backend server with TypeScript, Express.JS, and MongoDB.

## Features

- TypeScript enabled
- MongoDB
- Linting and formatting using ESLint & Prettier
- Nodemon for observing and updating server on file changes

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`MONGO_DB_URI`

`NODE_ENV`

## Run Locally

Clone the project

```bash
  git clone https://github.com/LuciKritZ/ts-express-mongo-template
```

Go to the project directory

```bash
  cd ts-express-mongo-template
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start:nodemon
```

## NPM Scripts

### Development

- `npm run dev` (Alternative to nodemon)
- `npm run start:nodemon` (Takes configurations from `nodemon.json`)

### Production

- `npm run start:prod`

### TypeScript

- `npm run build` - Compiles TS to JS

### Prettier

- `npm run format:check` - Checks if formatting matches to prettier's rules
- `npm run format:write` - Force the formatting

### ESLint

- `npm run lint:check` - Lints the code
- `npm run lint:fix` - Auto fixes the errors

## Acknowledgements

- [Creating new Node.js application with Express, TypeScript, Nodemon and ESLint][creating_a_node_js_app]
- [Set up a Node.js App with ESLint and Prettier][eslint_and_prettier]

## License

[MIT](https://choosealicense.com/licenses/mit/)

[creating_a_node_js_app]: https://dev.to/admirnisic/create-new-node-js-application-with-express-typescript-nodemon-and-eslint-f2l
[eslint_and_prettier]: https://dev.to/devland/set-up-a-nodejs-app-with-eslint-and-prettier-4i7p
