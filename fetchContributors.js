const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

async function fetchContributors(owner, repo) {
  // const owner = 'seriohub';
  // const repo = 'velero-helm';

  try {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/contributors`);
    const contributors = response.data;

    // Define the output path for the JSON file
    const outputPath = path.resolve(__dirname, `./src/data/${repo}.json`);
    
    // Write the contributors data to a JSON file
    await fs.ensureFile(outputPath);
    await fs.writeJson(outputPath, contributors, { spaces: 2 });

    console.log(`Contributors data fetched and saved to ${outputPath}`);
  } catch (error) {
    console.error('Error fetching contributors:', error);
  }
}

fetchContributors('seriohub', 'velero-helm');
fetchContributors('seriohub', 'velero-api');
fetchContributors('seriohub', 'velero-watchdog');
fetchContributors('seriohub', 'velero-ui');
fetchContributors('seriohub', 'velero-docs');

