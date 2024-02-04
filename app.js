// // app.js
// const express = require('express');
// const ejs = require('ejs');
// const bodyParser = require('body-parser');

// const app = express();

// // Set EJS as view engine
// app.set('view engine', 'ejs');
// // Use body-parser middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// const line = require('@line/bot-sdk');

// const config = {
//   channelAccessToken: 'fl4PNMQqOKVKs66RJwj6aWaDSb/g0m9T63+jD3pyL2gBAZlRoQ91/GEablCO51BL9r0tDm5Ix6aXrXJrTWUxUFVXke7mWAiO4hs+aC3DfK4rHupL+niCkw2KNx6MVj+UQcM9PyOiQNVeonrx2aA68gdB04t89/1O/w1cDnyilFU=', // Replace with your actual channel access token
//   channelSecret: '0b177b2377d7c9f1662b1ae5c9f8b93f' // Replace with your actual channel secret
// };

// const client = new line.Client(config);

// app.get('/', (req, res) => {
//     res.render('index');
// })

// app.post('/send-message', (req, res) => {
//   const message = {
//     type: 'text',
//     text: req.body.message // Get the message content from the form submission
//   };

//   const userId = 'Ueb583357c0ccd10d2324f24d7d3d1987'; // Replace with the user ID of the recipient

//   client.pushMessage(userId, message)
//     .then(() => {
//       res.send('Message sent successfully');
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).send('Error sending message');
//     });
// });


// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });