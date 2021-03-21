const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use((err, req, res, next) => {
  if (err instanceof Error) {
    return res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

// error handler middleware
// app.use((error, req, res, next) => {
//   console.error(error.stack);
//   res.status(500).send('Something Broke!');
// });

app.listen(3333);
