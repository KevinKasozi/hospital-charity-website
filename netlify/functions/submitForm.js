exports.handler = async (event, context) => {
    try {
      const data = JSON.parse(event.body);
      console.log('Form data received:', data);
  
      // Here, you can handle the form data, such as sending an email or saving it to a database
  
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
  