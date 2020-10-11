const express = require('express');
const router = express.Router();
const createError = require('http-errors');

const components = ['header'];

router.get('/preview/:component', (req, res, next) => {

  const found = components.find(c => c === req.params.component);

  if (!found) {
    next(createError(404));
  } else {
    res.render('index', { component: found });
  }

});

router.get('/component/:component', (req, res, next) => {

  const found = components.find(c => c === req.params.component);

  if (!found) {
    next(createError(404));
  } else {
    res.render('components/' + found);
  }

});

module.exports = router;
