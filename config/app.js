const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

process.env.NODE_ENV = process.env.NODE_ENV || "";

// in project root try <environment>.env and fallback on ".env"
let dotenvPath = `${path.dirname(__filename)}/../${process.env.NODE_ENV}.env`;
if (process.env.NODE_ENV !== "") {
  try {
    fs.accessSync(dotenvPath, fs.F_OK);
  } catch (e) {
    dotenvPath = `${path.dirname(__filename)}/../.env`;
  }
}

dotenv.config({
  silent: true,
  path: dotenvPath
});

const config = {
  port: process.env.PORT || 5000,
  env: process.env.NODE_ENV || "production",
  appKey: process.env.APP_KEY || "",
  siteURL: process.env.SITE_URL,
};

if (!config.siteURL) {
  if (config.env === "development") {
    config.siteURL = `http://localhost:${config.port}`;
  } else {
    config.siteURL = "https://cems.iith.ac.in";
  }
}

module.exports = config;
