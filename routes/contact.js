const express = require('express');
const email = require('emailjs');
const { gmailServiceId, gmailTemplate } = require('../public/js/config');
const router = express.Router();
router.use(express.json());


router.get('/contact', (req,res) => {
  res.render('contact');
});

router.post('/contact', (req,res) =>{
    console.log(req.body);

    const sendParams = {
        name: 'Crim Lawn and Landscape',
        notes: 'Customer Request'
    }

    email.send(`${gmailServiceId}, ${gmailTemplate}`,sendParams)
    .then(function(res) {
        console.log('SUCCESS!', res.status, res.text);
    }, function(error) {
        console.log('FAILED', error)
    });

})

module.exports = router;