

const uuid = require('./uuid');
const dynamodb = require('./dynamodb');

const headers = {
  "Access-Control-Allow-Origin": "*", // Required for CORS support to work
  "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
};

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.DYNAMODB_OPTIONS,
    Item: {
      id: uuid(),
      title: data.title,
      description: data.description,
      icons: data.icons,
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };

  // write the todo to the database
  dynamodb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t create the option.'));
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
      headers: {
        "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials" : true, // Required for cookies, authorization headers with HTTPS
        "Content-Type": "application/json"
      }
    };
    
    callback(null, response);
  });
};

module.exports.get = (event, context, callback) => {
  const params = {
    TableName: process.env.DYNAMODB_OPTIONS,
    // Key: {
    //   id: event.pathParameters.id,
    // },
  };

  // fetch todo from the database
  dynamodb.scan(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t fetch the options.'));
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify(result.Items),
    };
    callback(null, response);
  });
};

module.exports.update = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.DYNAMODB_OPTIONS,
    Key: {
      id: event.pathParameters.id,
    },
    ExpressionAttributeValues: {
      ':title': data.title,
      ':description': data.description,
      ':icons': data.icons,
      ':updatedAt': timestamp,
    },
    UpdateExpression: 'SET title = :title, description = :description, icons = :icons, updatedAt = :updatedAt',
    ReturnValues: 'ALL_NEW',
  };

  // update the todo in the database
  dynamodb.update(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t update the todo item.'));
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Attributes),
      headers: headers
    };
    callback(null, response);
  });
};
