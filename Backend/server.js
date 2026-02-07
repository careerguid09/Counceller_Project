require("dotenv").config();
const app = require("./src/app");
const morgan = require('morgan');

const PORT = process.env.PORT || 5000;

// Morgan logging middleware
app.use(morgan(':method :url :status :response-time ms - :date[clf]'));

// Start server
app.listen(PORT, () => {
  console.log(`
  🚀 Server started successfully!
  🌐 URL: http://localhost:${PORT}
  
  📧 Career Form Endpoint: POST http://localhost:${PORT}/api/career
  
  📋 Required Fields:
    1. name
    2. email
    3. mobileNumber
    4. city
    5. problem
  
  🔍 Test with: GET http://localhost:${PORT}
  `);
});