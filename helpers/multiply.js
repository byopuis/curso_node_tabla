"use strict";
const colors = require("colors");
const createFile = async function (base, listar, hasta) {
  try {
    const fs = require("fs");

    let output = "";

    const limit = hasta ? hasta : 10;

    for (let i = 0; i <= limit; i++) {
      output += `${base} * ${i} = ${base * i}\n`;
    }
    if (listar) {
      console.log("================================".red);
      console.log(colors.blue.underline(`Tabla del:`, base));
      console.log("=================================".red);
      console.log(output);
    }

    // fs.writeFile(`tabla-${base}.txt`, output, (err) => {
    //   if (err) throw err;
    //   console.log(`tabla-${base}.txt creado`);
    // }); INCLUDING ERROR HANDLING

    fs.writeFileSync(`./output/tabla-${base}.txt`, output);
    return colors.blue.underline(`tabla-${base}.txt`);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createFile,
};
