const dotenv = require('dotenv');
const path = require('path');

function loadEnv() {
  // load .env.local
  const envLocalPath = path.resolve(__dirname, '../.env.local');
  const envLocalResult = dotenv.config({ path: envLocalPath });
  if (envLocalResult.error) {
    console.warn(`.env.local not found or failed to load`);
  } else {
    console.log('load .env.local');
    return;
  }

  // load .env
  const envPath = path.resolve(__dirname, '../.env');
  const envResult = dotenv.config({ path: envPath });
  if (envResult.error) {
    console.warn(`.env not found or failed to load`);
  } else {
    console.log('load .env.local');
  }
}

module.exports = { loadEnv };
