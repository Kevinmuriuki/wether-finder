var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Weather Finder' });
});


module.exports = router;
