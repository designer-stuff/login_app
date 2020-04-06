const config = require("config");

module.exports = function() {
  // check for private key
  if (!config.get("privateKey")) {
    console.log("FATAL ERROR: Private key not defined.");
    process.exit(0);
  }
};
