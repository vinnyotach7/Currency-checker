const { dataSourceService } = require("./services/dataSourceService");
const { helpMenu } = require("./services/helpMenu");
const { inputValidation } = require("./services/inputValidation");
const { CustomError } = require("./utils/customError");

// get the user input
const run = async () => {
  const userInput = process.argv[2];
   //do validation
  try {
    if (inputValidation(userInput)) {
      // fetch data
      const data = await dataSourceService();
      // confirm the currency in the list of currencies
      if (data.find((d) => d.ISO4217Code === userInput.toUpperCase())) {
        console.log(`Supports currency ${userInput}`);
      }
    }
  } catch (e) {
    if (e instanceof CustomError) {
      helpMenu(e.code);
    } else {
      helpMenu("OTHER");
    }
  }
};

console.log("Starting application");
run();