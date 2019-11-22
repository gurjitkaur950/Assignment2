var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/about');
const ctrlMusic = require('../controllers/music');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/list', ctrlMusic.musicList);
router.get('/about', ctrlMusic.about);
router.get('/display', ctrlMusic.display);

module.exports = router;
