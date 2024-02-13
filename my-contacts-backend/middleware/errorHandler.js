const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode;

  // If statusCode is not set or is 200, default it to 500
  if (!statusCode || statusCode === 200) {
    statusCode = 500;
  }

  // Set the response status code
  res.status(statusCode);

  // Send the error response
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.SERVER_ERROR:
    default:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
  }
};

module.exports = errorHandler;

// const { constants } = require("../constants");
// const errorHandler = (err, req, res, next) => {
//   const statusCode = res.statusCode ? res.statusCode : 500;
//   switch (statusCode) {
//     case constants.VALIDATION_ERROR:
//       res.json({
//         title: "Validation Failed",
//         message: err.message,
//         stackTrace: err.stack,
//       });
//       break;
//     case constants.NOT_FOUND:
//       res.json({
//         title: "Not Found",
//         message: err.message,
//         stackTrace: err.stack,
//       });
//     case constants.UNAUTHORIZED:
//       res.json({
//         title: "Unauthorized",
//         message: err.message,
//         stackTrace: err.stack,
//       });
//     case constants.FORBIDDEN:
//       res.json({
//         title: "Forbidden",
//         message: err.message,
//         stackTrace: err.stack,
//       });
//     case constants.SERVER_ERROR:
//       res.json({
//         title: "Server Error",
//         message: err.message,
//         stackTrace: err.stack,
//       });
//     default:
//       console.log("No Error, All good !");
//       break;
//   }
// };

// module.exports = errorHandler;
