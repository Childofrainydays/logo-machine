// The logic for the logo maker lives here.

const fs = require('fs');
const { prompt } = require('inquirer');
const shapeOptions = require('./shapes');
const colorOptions = require('./colors');
const logoTemplate = require('./templates/logoTemplate.svg');
const { async } = require('rxjs');

async function generateLogo() {

}

module.exports = {
    generateLogo
  };