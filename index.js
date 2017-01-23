var apiai = require('apiai');

var app = apiai("6e034666175b45729b64673703747393");

var request = app.textRequest('what can you do for me', {
    sessionId: '1234'
});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();
