const neatCsv = require("neat-csv");
const fs = require("fs");
const https = require("https");

/**
 * Parses a CSV file to JS array
 *
 */

const parseCsvToArray = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./temp.csv", (err, data) => {
      // console.log(data.toString());
      if (err) {
        reject(err);
      }
      resolve(data.toString());
    });
  })
    .then((data) => neatCsv(data))
    .catch((e) => e);
};

/**
 * Downloads a file resource from remote path
 *
 * @param {string} path  string with url/path to file
 */
const downloadFile = (path) => {
  return new Promise((resolve, reject) => {
    https.get(path, (response) => {
      const file = fs.createWriteStream("temp.csv");
      const stream = response.pipe(file);

      stream.on("finish", () => {
        if (response.statusCode === 200) {
          resolve("done");
        }
        reject(new Error("Resource not found!"));
      });
    });
  })
    .then((data) => data)
    .catch((e) => e);
};

module.exports.parseCsvToArray = parseCsvToArray;
module.exports.downloadFile = downloadFile;