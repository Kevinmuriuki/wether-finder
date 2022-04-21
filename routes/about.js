var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller')

/* GET anout page. */
router.get('/', controller.aboutPage);

module.exports = router;
