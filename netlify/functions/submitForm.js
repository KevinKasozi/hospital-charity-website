const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  console.log("Function invoked");
  try {
    const data = JSON.parse(event.body);
    console.log('Form data received:', data);

    // Create a transporter for IONOS
    const transporter = nodemailer.createTransport({
      host: 'smtp.ionos.com',
      port: 587, // You can also use 465 for secure connection, but make sure to adjust the `secure` field
      secure: false, // Set to true if you are using port 465
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

    // Log the mail options to ensure they are correct
    console.log('Mail options:', mailOptions);

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

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
