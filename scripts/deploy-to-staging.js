const { exec } = require("child_process");

deployAndSetPreviewURL();

async function deployAndSetPreviewURL() {
  const previewURL = await deployAndGetPreviewURL();
  console.log(previewURL);
}

function deployAndGetPreviewURL() {
  return new Promise((resolve, reject) => {
    exec(
      `vercel deploy --prebuilt --token=${process.env.VERCEL_TOKEN}`,
      (error, stdout, stderr) => {
        if (error) reject(error);

        const previewURL = getPreviewURLFromOutput(stdout);
        resolve(previewURL);
      }
    );
  });
}

function getPreviewURLFromOutput(output) {
  const pattern = /Preview: (\S+)/;
  return pattern.exec(output)[1];
}
