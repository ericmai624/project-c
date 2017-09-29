const app = require('express')();
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();
const port = process.env.PORT || 3000;

nextApp
  .prepare()
  .then(() => {
    app.get('/', (req, res) => nextApp.render(req, res, '/', req.query));

    app.listen(port, () => console.log(`Ready to accept connection on ${port}`));
  });