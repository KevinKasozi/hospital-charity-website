require('dotenv').config();
const nodemailer = require('nodemailer');
const axios = require('axios');

exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);

    // Validate reCAPTCHA
    const recaptchaResponse = data['g-recaptcha-response'];
    const recaptchaSecret = process.env.SERVER_SIDE_CAPTCHA;

    const verifyResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaResponse}`
    );

    if (!verifyResponse.data.success) {
      console.error('reCAPTCHA verification failed:', verifyResponse.data['error-codes']);
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          message: 'reCAPTCHA verification failed. Please try again.',
          errors: verifyResponse.data['error-codes'] 
        }),
      };
    }

    // Email setup
    const transporter = nodemailer.createTransport({
      host: 'smtp.ionos.co.uk', // Your IONOS email host
      port: 587, // Port number for TLS
      secure: false, // Use TLS but not SSL
      auth: {
        user: process.env.EMAIL_USER, // Your IONOS email address
        pass: process.env.EMAIL_PASS, // Your IONOS email password
      },
      debug: true, // Enable debug output for detailed information
      logger: true, // Log sending information to console
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: 'contact@nsobanifoundationclinic.ch', // Recipient address
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
