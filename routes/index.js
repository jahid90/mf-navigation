const express = require('express');
const router = express.Router();

const components = ['header'];

router.get('/preview/:component', (req, res, next) => {

  const found = components.find(c => c === req.params.component);

  if (!found) {
    res.render('error', {
      message: 'The component could not be found',
      error: {
        status: '404',
        stack: ''
      }
    })
  } else {
    res.render('index', { component: found });
  }

});

router.get('/component/:component', (req, res, next) => {

  const found = components.find(c => c === req.params.component);

  if (!found) {
    res.render('error', {
      message: 'The component could not be found',
      error: {
        status: '404',
        stack: ''
      }
    })
  } else {
    res.render('components/' + found);
  }

});

module.exports = router;
