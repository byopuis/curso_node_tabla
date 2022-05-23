"use strict";
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: "true",
    describe: "it is the base of the multiplication",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: "false",
    describe: "Shows the list of operations",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: "10",
    describe: "Put a limit of the number of operations that has to be done",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "The base must be a number.";
    }
    return true;
  }).argv;

//
//console.log(argv);
// console.log("base: yargs:", argv.base);

module.exports = { argv };
