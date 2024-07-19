import express from 'express';
import api from '../api/index.js';
import web from '../web/index.js';

const app = express()
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use('/', web);

// TODO: add your endpoints here
app.use(express.json());
app.use('/api', api);

// serve static endpoints
app.use(express.static('public'));

export default app
