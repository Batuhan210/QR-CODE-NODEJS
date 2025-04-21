Explanation:
1. qr.image: Generates a QR code image from the provided URL. The type: "png" option specifies that the output should be a PNG image.

2. fs.createWriteStream: Creates a writable stream to save the QR code image to a file named qrCode.png.

3. qr.pipe(qrCodeStream): Pipes the QR code data into the writable stream, effectively saving it to the file.

4. fs.writeFile: Writes the user's URL to a file named userInput.txt.

5. If an error occurs during the file-writing process, it throws an error.

6. Logs a success message to the console once the file is saved.

SUMMARY
1. The script prompts the user for a URL.

2. It generates a QR code image for the URL and saves it as qrCode.png.

3. It also saves the URL to a text file named userInput.txt.

4. The process is asynchronous, and success messages are logged to the console when each task is completed.
