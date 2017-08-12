import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Api from './Api';
import config from '../config';

const poolData = {
  UserPoolId : config.UserPoolId, // Your user pool id here
  ClientId : config.ClientId // Your client id here
};

const UserPool = new CognitoUserPool(poolData);

function signUp (email, password) {
  const dataEmail = {
    Name: 'email',
    Value: email
  }

  const attributeEmail = new CognitoUserAttribute(dataEmail)
  UserPool.signUp(email, password, [attributeEmail], null, function(err, result){
      if (err) {
          alert(err);
          return;
      }
      const cognitoUser = result.user;
      console.log('user name is ' + cognitoUser.getUsername());
  });
}

function signIn (email, password) {
  const authenticationData = {
    Username : email,
    Password : password,
  };
  const authenticationDetails = new AuthenticationDetails(authenticationData);

  const userData = {
    Username : email,
    Pool : UserPool
  };
  const cognitoUser = new CognitoUser(userData);
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      console.log(result.getIdToken().getJwtToken(), Api);
      Api.onRequest(req => {
        req.headers.authentication = result.getIdToken().getJwtToken();
      });
    },
    onFailure: function(err) {
        alert(err);
    },
  });
}

const Auth = {
  signUp,
  signIn
}

export default Auth;
