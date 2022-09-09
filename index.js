// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


// --------------------------------------------------------------------------

// Minha solução

app.get("/api", (req, res) => {
  const now = new Date();
  res.json({ unix: now.getTime(), utc: now.toUTCString() })
});

app.get("/api/:date", function (req, res) {

  let dateString = req.params.date;
  let invalidDate = "Invalid Date";
  let date;

  if (parseInt(dateString) < 10000) {   // 5 ou mais digitos devem formar uma hora unix
    date = new Date(dateString);
  } else {
    date = new Date(parseInt(dateString));
  }

  if (date.toString() === invalidDate) {
    res.json({ error: invalidDate});
  } else {
    res.json({ unix: date.valueOf(), utc: date.toUTCString() });
  }

});

// --------------------------------------------------------------------------


// listen for requests :)


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


// app.listen(5432, () => console.log("Server is running!"));