// The logic for the logo generation lives here.

// Require the fs and inquirer modules
const fs = require('fs');
const { prompt } = require('inquirer');
// Require the shape and color options
const shapeOptions = require('./shapes');
const colorOptions = require('./colors');
// Read the logo template file
const logoTemplate = fs.readFileSync('./templates/logoTemplate.svg', 'utf-8');

// Define the makeLogo function
async function generateLogo() {
    // Prompt the user for input
  const response = await prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Enter'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: shapeOptions
    },
    {
        type: 'list',
        name: 'color',
        message: 'Choose a color for the logo:',
        choices: colorOptions
    },
    {
        type: 'input',
        name: 'letters',
        message: 'Enter three letters for the logo:',
        // Validate that the user input is exactly three letters
        validate: input => {
            // Check if the input is exactly three letters using a regular expression
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
            // / is the start of the regular expression ^ means start of the string [A-Za-z] means any letter A-Z or a-z {3} means three of the previous token $ means end of the string / is the end of the regular expression
          if (/^[A-Za-z]{3}$/.test(input)) {
            return true;
          }
          return 'Please enter exactly three letters (A-Z or a-z).';
        }
    }
    ]);

    // Replace placeholders in the template with user inputs
    const svgContent = logoTemplate
        .replace('${shape}', response.shape)
        .replace('${color}', response.color)
        .replace('${letters}', response.letters.toUpperCase())
        .replace('${name}', response.name);

    // Write the SVG content to a file
    fs.writeFileSync(`${response.name}-logo.svg`, svgContent, 'utf-8');

    // Log the success message
    console.log(`Logo created for ${response.name}!`);
}

// Export the makeLogo function
module.exports = {
  generateLogo
};