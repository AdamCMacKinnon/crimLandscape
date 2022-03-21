const express = require('express');
const router = express.Router();
router.use(express.json());
const models = require('../models');

router.get('/admin', (req,res) => {
  res.render('admin/login');
});

router.post('/admin/login', async (req,res) => {
  let userName = req.body.userName
  let password = req.body.password

  let admin = await models.Admin.findOne({
    where: {
      userName: userName
    }
  })
  if (userName != null) {
    bcypt.compare(password, admin.password,(error, result) => {
      if (result) {
        if (req.session) {
          req.session.admin = { userName: user }
          res.redirect('/admin/dashboard');
        } else {
          res.render('/admin/login', { message: "Credentials Do Not Match!"})
        }
      }
    })
  }
})





module.exports = router