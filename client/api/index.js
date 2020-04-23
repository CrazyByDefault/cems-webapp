import Request from "superagent";

// function buildErrorObject(e, res) {
//   let err;

//   if (e) {
//     err = e;
//   } else if (!res || (res && !res.body)) {
//     err = "Data not found";
//   } else if (res.body.errors) {
//     err = res.body.errors;
//   }

//   // log to console in development
//   if (err && process.env.NODE_ENV === "development") {
//     /* eslint-disable no-console */
//     console.error(err);
//     /* eslint-enable no-console */
//   }
//   return err;
// }

/**
 * Functions requesting the Auth api endpoints
 */
function createToken(cb) {
  Request.post("/api/auth/getToken").end((e, res) => {
    const err = "";
    cb(err, res.body);
  });
}

function fetchLoginURL(cb) {
  Request.get("/api/auth/login").end((e, res) => {
    cb(e, res.body.data);
  });
}

function login(cb, code) {
  Request.post("/api/auth/login").send({ code }).end((e, res) => {
    cb(e, res.body);
  });
}

function fetchMeterDetail(cb, meterId, block) {
  Request.post("/api/meter/")
    .send({ meterId, block })
    .end((e, res) => {
      cb(e, res.body.data);
    });
}

function fetchBlockTotal(cb) {
  Request.get("/api/meter/blocktotal")
    .end((e, res) => {
      cb(e, res.body.data);
    });
}

export {
  createToken,
  fetchLoginURL,
  login,
  fetchMeterDetail,
  fetchBlockTotal
};
