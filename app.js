var express = require('express');
var fs = require('fs');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser')

app.use(cors())
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(function (req, res, next) {
	// console.log('POST request recieved');
	next();
})

app.get('/api/core-team-members', function (req, res) {
	fs.readFile('stub/core-team-members.json', 'utf8', function (err, data) {
		if (err) {
			console.log(err);
			res.status(404).send(JSON.stringify({error: "Could not get data"}));
		} else {
			res.send(data);
		}
	});
});

app.listen((process.env.PORT || 3000), function () {
  console.log('Example app listening on port 3000!')
})
