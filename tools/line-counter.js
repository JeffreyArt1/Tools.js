const { exec } = require('child_process');

module.exports = {
  getFileLines: async (filePath) => {
    return new Promise((resolve, reject) => {
      exec(`wc -l ${filePath}`, (err, stdout, stderr) => {
        if (stderr || err) reject(stderr.toString() || err);
        resolve(+stdout.toString().split(' ')[0]);
      });
    });
  },
};
