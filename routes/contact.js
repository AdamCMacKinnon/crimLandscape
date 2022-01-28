const express = require('express');
const router = express.Router();
router.use(express.json());
const nodemailer = require('nodemailer');


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


    transporter.sendMail({
        from: req.body.email,
        to: process.env.EMAIL_COMP,
        subject: req.body.service,
        text: `Looking for service in ${req.body.city},${req.body.state}\n
        <b>Customer comments:</b> ${req.body.comments}`
    })
})



module.exports = router;