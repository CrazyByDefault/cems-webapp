const express = require('express');
const router = express.Router();

const logger = require('../../utils/logger');
const path = require('path');
const log = logger.child({type: `module:${path.basename(__filename)}`});

const Request = require('superagent');
const authConfig = require('../../config/auth');
const apiURL = authConfig.thinkingNinja.apiURL;

const { checkError } = require("../../utils/checkError");

router.post('/getToken',
  (req, res, next) => {
    const data = {
      clientId: authConfig.thinkingNinja.clientId,
      secret: authConfig.thinkingNinja.clientSecret
    };
    Request
      .post(`${apiURL}auth/getToken`)
      .send(data)
      .end((err, response) => {
        // console.log(response);
        res.json(response.body);
      });
  }
);

router.post('/auth/login',
  (req, res, next) => {
    Request
      .post(`${apiURL}auth/login`)
      // .set("Authorization", req.CAT)
      .set("Authorization", req.cookies.CAT || req.CAT)
      .send(req.body)
      .end((err, response) => {
        const query = req.query;
        const error = checkError(err, response);
        if (error) {
          console.log("WTF", error);
          res.json(error);
          return;
        }

        if (!req.cookies.CAT) {
          console.log("setting cookie", req.CAT);
          res.cookie("CAT", req.CAT, {
            // httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
          });
        }
        const { data } = response.body;

        res.cookie("UAT", data.accessToken, {
          // httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
        });

        res.cookie("defaultPage", `/${data.defaultPage}`);
        data.defaultPage === "man" ? res.cookie("stageTypeId", data.stageTypeId) : null;
        data.defaultPage === "des" ? res.cookie("workerId", data.workerId) : null;

        if (query && query.redirectTo) {
          // res.status(304).redirect(query.redirectTo);
          res.json({
            status: 200,
            success: true,
            redirectTo: `/${query.redirectTo}`,
          });
        } else {
          res.json({
            status: 200,
            success: true,
            redirectTo: `/${data.defaultPage}`,
            stageTypeId: data.stageTypeId
          });
        }
      });
  }
);


module.exports = router;
