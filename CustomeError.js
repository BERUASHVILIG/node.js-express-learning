class CustomeError extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports = { CustomeError };
