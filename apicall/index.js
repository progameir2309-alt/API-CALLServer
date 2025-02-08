const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

// Example API call endpoint
app.post("/api/make-call", async (req, res) => {
  const { targetUrl, payload } = req.body;

  try {
    const response = await axios.post(targetUrl, payload);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("API Call Error:", error.message);
    res.status(500).send("API Call Failed");
  }
});

app.listen(3000, () => {
  console.log("API server running on port 3000");
});
