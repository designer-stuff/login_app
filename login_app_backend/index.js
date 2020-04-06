const config = require("config");
const express = require("express");
const app = express();

require("./startup/logging")();
require("./startup/config")();
require("./startup/db")();
require("./startup/routes")(app);

// Port Setting
const port = process.env.PORT || config.get("port");
app.listen(port, () => console.log(`Listening on port ${port}...`));
