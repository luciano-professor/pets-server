const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const PetController = require('./controllers/PetController');
const TypeController = require('./controllers/TypeController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/', (request, response) => {
  response.json({
    mensagem: 'Teste',
  });
});

//WEB
routes.get('/types', TypeController.index);
routes.get('/pets', PetController.index);
routes.get('/pets/:id/photos', PetController.photos);
routes.post('/pets', upload.array('photos'), PetController.create);

module.exports = routes;
