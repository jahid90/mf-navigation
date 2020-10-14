const express = require('express');
const router = express.Router();
const createError = require('http-errors');

const components = ['header', 'footer'];

const data = {
  version: process.env.VERSION || '0.0.0'
}

router.get('/preview/:component', (req, res, next) => {

  const found = components.find(c => c === req.params.component);

  if (!found) {
    next(createError(404));
  } else {
    res.render('index', { ...data, component: found });
  }

});

router.get('/component/:component', (req, res, next) => {

  const found = components.find(c => c === req.params.component);

  if (!found) {
    next(createError(404));
  } else {
    res.render('components/' + found, data);
  }

});

module.exports = router;
