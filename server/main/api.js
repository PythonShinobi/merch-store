// server/main/api.js
import express from "express";
import nodemailer from "nodemailer";
import env from "dotenv";

env.config();

const router = express.Router();

router.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    // Respond to the client immediately
    res.status(200).send('Email has been sent🙂.');

    // Send the email asynchronously
    (async () => {
        try {
            // Create a Nodemailer transporter using Gmail SMTP settings.
            let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.GMAIL,
                    pass: process.env.GMAIL_PASSWORD
                }
            });

            // Send email
            let info = await transporter.sendMail({
                from: email,
                to: process.env.GMAIL,
                subject: "New Contact Message",
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
            });

            console.log('Email sent:', info.messageId);
        } catch (error) {
            console.error(`Error sending email: ${error}`);
        }
    })();
});

export default router;