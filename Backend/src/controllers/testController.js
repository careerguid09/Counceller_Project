const testAPI = (req, res) => {
  res.json({
    success: true,
    message: "API is working 🚀"
  });
};

module.exports = { testAPI };
