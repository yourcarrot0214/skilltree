if (process.env.NODE_ENV === "prodution") {
  module.exports = require("./prod.js");
} else {
  module.exports = require("./dev.js");
}
