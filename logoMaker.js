// The logic for the logo generation lives here.

const fs = require('fs');
const { prompt } = require('inquirer');
const shapeOptions = require('./shapes');
const colorOptions = require('./colors');
const logoTemplate = fs.readFileSync('./templates/logoTemplate.svg', 'utf-8');

async function generateLogo() {
  // Rest of the code...
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
        validate: input => {
          if (/^[A-Za-z]{3}$/.test(input)) {
            return true;
          }
          return 'Please enter exactly three letters (A-Z or a-z).';
        }
    }
    ]);
}

module.exports = {
  generateLogo
};