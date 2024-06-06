const express = require('express');
const router = express.Router();

router.route('/')
.get((req, res) => {
  res.render('blogPage')
})

router.route('/:id')
.get((req, res) => {
  res.render('errorPage')
})

module.exports = router;