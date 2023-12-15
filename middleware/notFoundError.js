const { StatusCodes } = require("http-status-codes");

const notFoundError = (req, resp) => {
  resp
    .status(StatusCodes.NOT_FOUND)
    .json({ message: "Requested route not found" });
};

module.exports = notFoundError;
