/*
  This middleware checks for the Authorization Token in the client.
  Then creates a token if it is not supplied.
*/
const Request = require('superagent');

// import configs
const authConfig = require("../config/auth"); 

// error handler
const { sendError } = require("../utils/errorHandler");
const { checkError } = require("../utils/checkError");

const apiURL = authConfig.thinkingNinja.apiURL;

// @@TODO: Add expiry to the tokens also
const authAccessToken = async (req, res, next) => {
  if (!req.cookies) {
    sendError(res, 400, "Please allow the access to cookies to continue");
  }
  
  // User already authorised
  if (req.cookies.UAT || req.cookies.CAT) {
    next();
  }

  // User not authorised, fetch the client access token
  if (!req.cookies.CAT) {
    console.log("fetching tokens");
    await fetchCATAPI()
      .then(result => {
        res.cookie("CAT", result);
        req.CAT = result;
        next();
      })
      .catch(err => {
        res.send(err);
      });
  }
};

// Function to make the auth/getToken api to fetch CAT token
const fetchCATAPI = async () => {
  return new Promise((resolve, reject) => {
    const data = {
      clientId: authConfig.thinkingNinja.clientId,
      secret: authConfig.thinkingNinja.clientSecret
    };
  
    Request
      .post(`${apiURL}auth/getToken`)
      .send(data)
      .end((err, response) => {
        const error = checkError(err, response);
        if (error) {
          reject(error);
          return;
        }
  
        const { data } = response.body;
        resolve(data.clientToken);
      });
  });
}

module.exports = authAccessToken;
