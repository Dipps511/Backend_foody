const { StatusCodes } = require("http-status-codes");
const CustomErrorHandler = require("../errors/CustomErrorHandler");

const customMiddlewareErrorHandler = (err, req, resp, next) => {
  if (err instanceof CustomErrorHandler) {
    return resp.status(err.statusCode).json({ message: err.message });
  }

  resp.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
  next();
};

module.exports = customMiddlewareErrorHandler;
