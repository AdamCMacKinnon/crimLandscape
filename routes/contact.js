const express = require('express');
const router = express.Router();
router.use(express.json());

router.get('/contact', (req,res) => {
  res.render('contact');
});


module.exports = router;