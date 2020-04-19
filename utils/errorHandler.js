exports.sendError = function sendError(res, status, err) {
  return res
    .status(status)
    .send({
      success: false,
      message: err,
    });
};
