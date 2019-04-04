const Router = require('express').Router;

const musicRoute = Router();

const retrieveAll = require('../controllers/music');


musicRoute.get('/', retrieveAll);

module.exports = musicRoute