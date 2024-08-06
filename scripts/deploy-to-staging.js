const { exec } = require("child_process");

deployAndSetPreviewURL();

async function deployAndSetPreviewURL() {
  await deployAndGetPreviewURL();
}

function deployAndGetPreviewURL() {
  return new Promise((resolve, reject) => {
    exec(
      `vercel deploy --prebuilt --token=${process.env.VERCEL_TOKEN}`,
      (error, stdout) => {
        if (error) reject(error);

        //const previewURL = getPreviewURLFromOutput(stdout);
        console.log("STDOUT: " + stdout);
        resolve();
      }
    );
  });
}

function getPreviewURLFromOutput(output) {
  const pattern = /Preview: (\S+)/;
  return pattern.exec(output)[1];
}
