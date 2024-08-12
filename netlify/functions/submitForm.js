require('dotenv').config();
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);
    console.log('Form data received:', data);

    // Create a transporter for IONOS
    const transporter = nodemailer.createTransport({
      host: 'smtp.ionos.co.uk',
      port: 587, // Port 587 with TLS
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your IONOS email address
        pass: process.env.EMAIL_PASS, // Your IONOS email password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: 'nsobanimedical.center@gmail.com', // Recipient address
      subject: `New message from ${data.name}`, // Subject line
      text: `You have a new message from ${data.name} (${data.email}):\n\n${data.message}`, // Plain text body
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submission successful!' }),
    };
  } catch (error) {
    console.error('Error handling form submission:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};
