const express = require('express');
const router = express.Router();
router.use(express.json());

router.get('/services', (req,res) => {
  res.render('services');
});


module.exports = router;