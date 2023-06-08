var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');
convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);
});

const { exec } = require('child_process');

// Execute a command
const command = 'node index.js';
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error}`);
    return;
  }

  // Output of the command
  console.log(`Command output:\n${stdout}`);
});
function sendURL(URL) {
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}