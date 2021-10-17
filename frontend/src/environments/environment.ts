/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-1m2kbaiy.us', // the auth0 domain prefix
    audience: 'coffee', // the audience set for the auth0 app
    clientId: 'w5RQ9Q4wFtXOjazlPiVuN0WNtTIKXLhj', // the client id generated for the auth0 app
    // loginURL: 'http://dev-1m2kbaiy.us.auth0.com/login',
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
    
  }
};
