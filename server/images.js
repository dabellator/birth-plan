'use strict';

const aws = require('aws-sdk');
const s3 = new aws.S3({ apiVersion: '2006-03-01', signatureVersion: 'v2' });

const bucketName = process.env.BUCKET;

exports.put = (event, context, callback) => {
  var data = JSON.parse(event.body);
  var b64Image = data.base64Image;
  var isURI = b64Image.indexOf(',');
  var type = 'image/svg+xml';
  if (isURI !== -1) {
      type = b64Image.slice(b64Image.indexOf(':') + 1, b64Image.indexOf(';'));
      b64Image = b64Image.slice(isURI + 1);
  }

  var params = {
    Bucket: bucketName,
    Key: data.filename,
    Body: new Buffer(b64Image, 'base64'),
    ContentType: type
  }

  s3.putObject(params, function(err, data) {
    if (err) {
      // Fix error callback to actually return error
      console.error(err);
      callback({
        statusCode: 500,
        body: JSON.stringify(err)
      });
      return;
    }
    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(data)
    };
    callback(null, response);
  });
};

exports.get = (event, context, callback) => {
  var params = {
    Bucket: bucketName,
    Key: event.pathParameters.id,
  }

  s3.getObject(params, function(err, data) {
    if (err) {
      console.log(err, err.stack)
      callback(err);
    }

    callback(null, data)
  });
};
