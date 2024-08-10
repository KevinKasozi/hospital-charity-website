exports.handler = async (event, context) => {
  console.log("Function invoked");
  try {
    const data = JSON.parse(event.body);
    console.log('Form data received:', data);
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
