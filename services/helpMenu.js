const helpMenu = (code) => {
    const helpMessage = `
      DESCRIPTION
          This is a command line application to check currency support.
          npm run search [options]
      OPTIONS
          Options can be one of the following:
          1. ISO 4217 currency code: 3 letter string representing currency
             e.g 'KES' for Kenyan Shillings
             npm run search kes   or npm run search KES
          
          2. Help flag: character 'h' or 'H'
             npm run search h   or npm run search H 
      OUTPUT
          1. Shows message whether currency is supported
          2. Shows a message if input is invalid
          3. Shows a help menu
          `;
  
    const emptyInputMessage = `
      Must enter a currency code.
        e.g npm run search 'kes'`;
  
    const invalidISOMessage = `
      ISO 4217 code should be a three character string e.g "KES", "USD"`;
  
    const otherMessage = `An ERROR occured. Please try again.`;
  
    switch (code) {
      case "EMPTY":
        return console.log(emptyInputMessage);
  
      case "INV-ISO":
        return console.log(invalidISOMessage);
  
      case "HELP":
        return console.log(helpMessage);
  
      default:
        return console.log(otherMessage);
    }
  };
  
  module.exports.helpMenu = helpMenu;