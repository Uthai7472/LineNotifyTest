const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000; // or any port you prefer

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Render the form page
app.get('/', (req, res) => {
  res.render('form');
});

// Handle form submission
app.post('/send', (req, res) => {
  const message = req.body.message;

  // Send the message to Line Notify
  axios
    .post('https://notify-api.line.me/api/notify', {
      message: message,
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer mEMz5TD1UWXh3n2AC2ETU4787EMhQcOj9NBJxUc69ZK',
      },
    })
    .then((response) => {
      console.log(response.data);
      res.render('success', { message });
    })
    .catch((error) => {
      console.error(error);
    //   res.render('error');
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});