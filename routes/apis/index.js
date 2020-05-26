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
    Request
      .get(`${apiURL}auth/getToken`)
      .end((err, response) => {
        // console.log(response);
        res.json(response.body);
      });
  }
);

// router.post('/auth/login',
//   (req, res, next) => {
//     Request
//       .post(`${apiURL}auth/login`)
//       // .set("Authorization", req.CAT)
//       .set("Authorization", req.cookies.CAT || req.CAT)
//       .send(req.body)
//       .end((err, response) => {
//         const query = req.query;
//         const error = checkError(err, response);
//         if (error) {
//           console.log("WTF", error);
//           res.json(error);
//           return;
//         }

//         if (!req.cookies.CAT) {
//           console.log("setting cookie", req.CAT);
//           res.cookie("CAT", req.CAT, {
//             // httpOnly: true,
//             maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
//           });
//         }
//         const { data } = response.body;

//         res.cookie("UAT", data.accessToken, {
//           // httpOnly: true,
//           maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
//         });

//         res.cookie("defaultPage", `/${data.defaultPage}`);
//         data.defaultPage === "man" ? res.cookie("stageTypeId", data.stageTypeId) : null;
//         data.defaultPage === "des" ? res.cookie("workerId", data.workerId) : null;

//         if (query && query.redirectTo) {
//           // res.status(304).redirect(query.redirectTo);
//           res.json({
//             status: 200,
//             success: true,
//             redirectTo: `/${query.redirectTo}`,
//           });
//         } else {
//           res.json({
//             status: 200,
//             success: true,
//             redirectTo: `/${data.defaultPage}`,
//             stageTypeId: data.stageTypeId
//           });
//         }
//       });
//   }
// );

router.get('/auth/login',
  (req, res) => {
    Request
      .get(`${apiURL}auth/login`)
      .set("Authorization", req.cookies.CAT || req.CAT)
      .end((err, response) => {
        console.log(response.body);
        res.json(response.body);
      });
  }
);

router.get('/auth/google/callback',
  (req, res) => {
    Request
      .post(`${apiURL}auth/login`)
      .set("Authorization", req.cookies.CAT || req.CAT)
      .send({
        code: req.query.code
      })
      .end((err, response) => {
        // res.json(response.body);
        console.log(response.body)
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

        res.json({
          status: 200,
          success: true,
          redirectTo: `/`,
        });
      });
  }
);

router.post('/auth/login',
  (req, res) => {
    Request
      .post(`${apiURL}auth/login`)
      .set("Authorization", req.cookies.CAT || req.CAT)
      .send(req.body)
      .end((err, response) => {
        // res.json(response.body);
        console.log(response.body)
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

        res.json({
          status: 200,
          success: true,
          redirectTo: "/",
        });
      });
  }
);

router.post('/meter/',
  (req, res) => {
    Request
      .get(`${apiURL}meter/`)
      .query({ meterId: req.body.meterId, block: res.body.block})
      .end((err, response) => {
        res.json(response.body);
      });
  }
);

router.post('/iith/blocktotal',
  (req, res) => {
    Request
      .get(`${apiURL}iith/block-total`)
      .query({ block: req.body.block })
      .end((err, response) => {
        res.json(response.body);
      });
  }
);

router.post('/iith/blockActivePower',
  (req, res) => {
    Request
      .get(`${apiURL}iith/block-active-power`)
      .query({ block: req.body.block })
      .end((err, response) => {
        res.json(response.body);
      });
  }
);



module.exports = router;
