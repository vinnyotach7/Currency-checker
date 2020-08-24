const {
    parseCsvToArray,
    downloadFile,
  } = require("./../utils/parse-csv-to-json");
  
  const { Currency } = require("./../models/currency");
  
  // Read data from source
  const url =
    "https://focusmobile-interview-materials.s3.eu-west-3.amazonaws.com/Cheap.Stocks.Internationalization.Currencies.csv";
  
  
  const dataSourceService = async function () {
    try {
      const download = await downloadFile(url);
      if (download === "done") {
        const data = await parseCsvToArray();
        // Convert data to a list of currency objects
        if (data.length > 0) {
          const currencyList = [];
          data.forEach((c) => {
            currencyList.push(
              new Currency(c["Country"], c["Currency"], c["ISO 4217 Code"])
            );
          });
        // Return the list
          return currencyList;
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  
  module.exports.dataSourceService = dataSourceService;