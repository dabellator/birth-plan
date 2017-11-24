var Cognito = require('amazon-cognito-identity-js');

var poolData = {
  UserPoolId : 'us-west-2_JD2YXGORS',
  ClientId: '7d4e1qkejsc94d5k4b26ia12vf' // Your client id here
};

var UserPool = new Cognito.CognitoUserPool(poolData);

function signUp (email, password) {
  var dataEmail = {
    Name: 'email',
    Value: email
  }

  var attributeEmail = new Cognito.CognitoUserAttribute(dataEmail)
  UserPool.signUp(email, password, [attributeEmail], null, function(err, result){
    if (err) {
      console.log(err);
      return;
    }
    var cognitoUser = result.user;
    console.log('user name is ' + cognitoUser.getUsername());
  });
}

function signIn (email, password) {
  var authenticationData = {
    Username : email,
    Password : password,
  };
  var authenticationDetails = new Cognito.AuthenticationDetails(authenticationData);

  var userData = {
    Username : email,
    Pool : UserPool
  };
  var cognitoUser = new Cognito.CognitoUser(userData);
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      console.log(result.getIdToken().getJwtToken());
    },
    onFailure: function(err) {
        console.log(err);
    },
  });
}

var Auth = {
  signUp,
  signIn
}

// Auth.signUp('jordanbundy@gmail.com', 'jRvB.0079');
Auth.signIn('jordanbundy@gmail.com', 'jRvB.0079');
