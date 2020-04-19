exports.checkError = function checkError(err, res) {
  let error;

  if (!res) {
    error = "Server not responding";
    return {
      status: 500,
      message: error
    };
  }

  if (res.body && !res.body.success) {
    error = res.body.message;
    return {
      status: res.statusCode || 400,
      message: error
    };
  }

  if (!res.body || !res.body.data || res.body.data.length === 0) {
    error = "API responded with no data";
    return {
      status: 400,
      message: error 
    };
  }

  if (err) {
    error = err;
    return {
      status: 400,
      message: error.sqlMessage
    };
  }

  // log to console in development
  if (error && process.env.NODE_ENV === 'development') {
    /* eslint-disable no-console */
    console.error(error);
    /* eslint-enable no-console */
  }
  return false;
}
