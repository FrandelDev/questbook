const {Router} = require('express');
const route = Router();
const {renderIndex, createNewEntry, renderNewEntry} = require('../controllers/entries.controllers')
route.get('/',renderIndex);
route.get('/new-entry',renderNewEntry);
route.post('/new-entry',createNewEntry);
module.exports= route