const { exec } = require('child_process');

// This util counts the ammount of lines in a document.
module.exports = {
  countLines: async (filePath) => {
    return new Promise((resolve, reject) => {
      exec(`wc -l ${filePath}`, (err, stdout, stderr) => {
        if (stderr || err) reject(stderr.toString() || err);
        resolve(+stdout.toString().split(' ')[0]);
      });
    });
  },
};
