// import fetch from 'node-fetch';


// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser'); // Optional, if you're using it to parse request bodies
// const fetch = require('node-fetch'); // Ensure node-fetch is installed if you're using it

// const app = express();
// const port = process.env.PORT || 5000;

// // Enable CORS for all origins
// app.use(cors());

// // Optional: Use body-parser if needed
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Example route to get access token
// app.post('/api/getAccessToken', async (req, res) => {
//     const { clientId, clientSecret, authCode } = req.body;

//     try {
//         const response = await fetch('https://accounts.zoho.com/oauth/v2/token', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             body: new URLSearchParams({
//                 client_id: clientId,
//                 client_secret: clientSecret,
//                 grant_type: 'authorization_code',
//                 redirect_uri: 'https://deluge.zoho.com/delugeauth/callback',
//                 code: authCode
//             })
//         });

//         const data = await response.json();
//         if (data.access_token) {
//             res.json({ access_token: data.access_token });
//         } else {
//             res.status(400).json({ error: 'Failed to get access token' });
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });
