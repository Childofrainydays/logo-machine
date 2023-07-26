const { generateLogo } = require('./logoMaker.js'); // Import the generateLogo function from logoMaker.js

async function main() {
  console.log('SVG Logo Generator');

  // Call the generateLogo function to start the logo generation process
  await generateLogo();

  console.log('All done!');
}

main();