const express = require('express');
const emailjs = require('emailjs');
const { gmailServiceId, gmailTemplate } = require('../public/js/config');
const { SMTPClient } = require('emailjs');
const router = express.Router();
router.use(express.json());


router.get('/contact', (req,res) => {
  res.render('contact');
});

router.post('/contact', (req,res) =>{

    let email = req.body.email
    let phone = req.body.phone
    let service = req.body.service
    let city = req.body.city
    let state = req.body.state
    let comment = req.body.comment
    console.log(req.body);

const client = new SMTPClient({
    user: 'crimslawnandlandscape',
    password: 'Supercrimian#1010',
    host: 'smtp.gmail.com',
    ssl: true
})

client.send({
    from: `${email}`,
    to: 'crimslawnandlandscape@gmail.com',
    subject: `${service} in ${city}, ${state}`,
    text: `
    Client Phone Number: ${phone}\n
    Comments: ${comment}
    `
},
(err, message) =>{
    console.log(err || message);
})

    emailjs.send(`${gmailServiceId}, ${gmailTemplate}`,sendParams)
    .then(function(res) {
        console.log('SUCCESS!', res.status, res.text);
    }, function(error) {
        console.log('FAILED', error)
    });

})

module.exports = router;