require('dotenv').config();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

const submitContactForm = async (req, res) => {
    // 1. Get the VISITOR'S email from the input
    const { name, email, phone, message } = req.body;

    try {
        // Save to database (optional backup)
        await Contact.create({ name, email, phone, message });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your 'Messenger' Account
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            // SENDER: Must be YOU (to pass security)
            from: `Portfolio Bot <${process.env.EMAIL_USER}>`, 
            
            // RECIPIENT: You want to receive this message
            to: process.env.EMAIL_USER, 

            // LOGIC FIX: When you hit "Reply", it goes to the VISITOR'S input email
            replyTo: email, 

            subject: `New Message from ${name}`, // Subject line
            html: `
                <h3>You have a new portfolio contact!</h3>
                <p><strong>From:</strong> ${name} (${email})</p>
                <p><strong>Phone:</strong> ${phone || 'No phone provided'}</p>
                <div style="background:#f4f4f4; padding:15px; border-left: 4px solid #orange;">
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                </div>
                <p style="font-size:12px; color: gray;">Click "Reply" to email ${name} directly.</p>
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: 'Message sent!' });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

module.exports = { submitContactForm };