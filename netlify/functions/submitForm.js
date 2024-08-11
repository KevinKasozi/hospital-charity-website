const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);
    console.log('Form data received:', data);

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
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
