var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'Weather Finder' });
});



module.exports = router;
