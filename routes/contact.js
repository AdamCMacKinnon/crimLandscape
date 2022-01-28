const express = require('express');
const router = express.Router();
router.use(express.json());
const nodemailer = require('nodemailer');
// const { emailComp, passwordEmail } = require('../public/js/config');


router.get('/contact', (req,res) => {
  res.render('contact');
});

router.post('/contact', (req,res) =>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_COMP,
            pass: process.env.COMP_PASS
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: process.env.EMAIL_COMP,
        subject: `Crim Lawn Service: ${req.body.service}`,
        text: req.body.comments
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            res.send('error sending mail');
            console.log(error);
        } else {
            res.send('success!');
            console.log(info.response);
            res.send('successfully sent mail')
        }
    })
})



module.exports = router;