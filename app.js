"use strict";
const { createFile } = require("./helpers/multiply");
const { argv } = require("./configuration/yargs");
// const { createFile } = require("./helpers/multiply");
console.clear();

// const [, , arg3 = "base=5"] = process.argv;
// const [, base] = arg3.split("=");
// console.log(base);
// console.log(process.argv);

// const base = 4;
createFile(argv.b, argv.l, argv.h)
  .then((fileName) => console.log(fileName, "creado"))
  .catch((err) => console.log(err));
