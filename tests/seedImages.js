var fs = require('fs');
var https = require('https');
var imageFolder = __dirname + '/updated_svg';
var hostname = "yaac7tr9s8.execute-api.us-west-2.amazonaws.com";

var s3Options = {
  hostname: hostname,
  path: '/dev/images',
  method: 'PUT'
};

var dynamoOptions = {
  hostname: hostname,
  path: '/dev/image-data',
  method: 'POST'
};

function storeImage(data, filename) {

  var req = https.request(s3Options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
    });
  });

  req.on('error', function(e) {
    console.log("ERR: ", e.message);
  });

  req.write(JSON.stringify({
    base64Image: data,
    filename: filename
  }));

  req.end();
}

function saveImageData(filename) {

  var req = https.request(dynamoOptions, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      console.log('DYNAMO: ', chunk);
    })
  });

  req.on('error', function(e) {
    console.log("ERR: ", e.message);
  });

  req.write(JSON.stringify({filename: filename}));

  req.end();
}

fs.readdir(imageFolder, function(err, filenames) {
  if (err) throw(err);

  filenames.forEach(function(filename) {
    fs.readFile(`${imageFolder}/${filename}`, function(err, data) {
      if (err) throw(err);
        storeImage(new Buffer(data).toString('base64'), filename);
        saveImageData(filename);
    })
  })
})
