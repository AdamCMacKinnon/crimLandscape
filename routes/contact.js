const express = require('express');
const router = express.Router();
router.use(express.json());
const models = require('../models');

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

    let client = models.contact.build({
        email: email,
        phone: phone,
        service: service,
        city: city,
        state: state,
        comment: comment
    })
    if (client.email && client.phone != null) {
        client.save()
        .then(function(newClient) {
            res.render('index', { message: 'Thank you for your inquiry!  Please give us up to 24 hours to respond.' })
        }).catch(function(error) {
            res.render('index', { message: 'There was an ERROR with your request!  Please give us a call!' })
            console.trace(error)
        })
    } else {
        res.render('contact', { message: 'We need a way to get in touch with you!  Make sure to leave a phone number or email!' })
    }
})

module.exports = router;