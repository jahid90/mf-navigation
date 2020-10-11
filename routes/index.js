var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/header', (req, res, next) => {
  res.render('header');
});

module.exports = router;
