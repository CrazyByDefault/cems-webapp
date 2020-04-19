const bunyan = require("bunyan");
const config = require("../config/app");
var PrettyStream = require('bunyan-pretty-colors');
 
var prettyStdOut = new PrettyStream();
prettyStdOut.pipe(process.stdout);

const logger = bunyan.createLogger({
  name: "webapp",
  streams: [
    {
      level: config.env === "production" ? "info" : "debug",
      stream: process.stdout
    },
  ],
  serializers: bunyan.stdSerializers
});

module.exports = logger;
