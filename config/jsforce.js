const jsforce = require('jsforce');
const session = require('express-session');

// Organisation in Salesforce
const org = new jsforce.Connection()

module.exports = {
  // Connect to Salesforce
  login: () => {
    return new Promise((res, rej) => {
      org.login(process.env.SF_USERNAME, process.env.SF_PASSWORD + process.env.SF_SECURITY_TOKEN, function (err, userInfo) {
      try {
        // add result to the session for api access...
        session.org = org;
        session.token = org.accessToken;
        res(org)
      } catch (e) {
        rej(e)
      }
      })
    })
  }
}