const { sendCareerEmail } = require('../config/emailConfig');


const submitCareerForm = async (req, res) => {
  try {
    const { name, email, mobileNumber, city, problem } = req.body;

 
    if (!name || !email || !mobileNumber || !city || !problem) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required: Name, Email, Mobile Number, City, and Problem'
      });
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

  
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobileNumber)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid 10-digit Indian mobile number'
      });
    }

    

 
    sendCareerEmail(email, name, mobileNumber, city, problem)
      .then(result => {
        if (result.success) {
          console.log('Confirmation email sent to:', email);
        } else {
          console.log('Email sending failed for:', email);
        }
      })
      .catch(err => {
        console.error(' Email error:', err);
      });


    res.status(200).json({
      success: true,
      message: 'Your career query has been submitted successfully!',
      details: 'Our career counselor will contact you within 24 hours.',
      data: {
        name,
        email,
        mobileNumber,
        city,
        problemPreview: problem.substring(0, 100) + (problem.length > 100 ? '...' : '')
      },
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error(' Form submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong on our server. Please try again.',
      error: error.message
    });
  }
};

module.exports = { submitCareerForm };