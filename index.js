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
