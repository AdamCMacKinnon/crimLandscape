const express = require('express');
const router = express.Router();
router.use(express.json());
const models = require('../models');

router.get('/admin', (req,res) => {
  res.render('admin/login');
});





module.exports = router