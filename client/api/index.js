import Request from "superagent";

function buildErrorObject(e, res) {
  let err;

  if (e) {
    err = e;
  } else if (!res || (res && !res.body)) {
    err = "Data not found";
  } else if (res.body.errors) {
    err = res.body.errors;
  }

  // log to console in development
  if (err && process.env.NODE_ENV === "development") {
    /* eslint-disable no-console */
    console.error(err);
    /* eslint-enable no-console */
  }
  return err;
}

/**
 * Functions requesting the Auth api endpoints
 */
function createToken(cb) {
  Request.post("/api/auth/getToken").end((e, res) => {
    const err = "";
    cb(err, res.body);
  });
}

export {
  createToken,
};
