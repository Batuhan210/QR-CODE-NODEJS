/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";

// Get user input
inquirer
  .prompt([
    {
      type: "input",
      name: "url",
      message: "Enter a URL to generate a QR code:",
    },
  ])

  .then((answers) => {
    // Generate  QR code
    const qrCode = qr.image(answers.url, { type: "png" });
    const qrCodePath = "qrCode.png";
    const qrCodeStream = fs.createWriteStream(qrCodePath);
    qrCode.pipe(qrCodeStream); 
    
    // Create file
    fs.writeFile("userInput.txt", answers.url, (error) => {
      if (error) throw error;
      console.log("The file has been saved!");
    });
  });
