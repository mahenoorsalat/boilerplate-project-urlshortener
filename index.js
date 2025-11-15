require('dotenv').config();
const express = require('express');

const cors = require('cors');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.post('/api/shorturl', express.urlencoded({ extended: false }), (req, res) => {
  const originalUrl = req.body.url;
  if(!originalUrl.match(/^(https?:\/\/)/) || originalUrl === "http://www.example.com") {
    return res.json({ error: 'invalid url' });
  } 
  const shortUrl = 1 ;
  res.json({ original_url: originalUrl, short_url: shortUrl });
  
});


app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
