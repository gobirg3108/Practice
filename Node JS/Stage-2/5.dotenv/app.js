// Load environment variables
require("dotenv").config();

const PORT = process.env.PORT;
const USER = process.env.USER_NAME;
const API_KEY = process.env.API_KEY;

console.log(`✅ Server running on port ${PORT}`);
console.log(`👤 Logged in as: ${USER}`);
console.log(`🔐 API Key: ${API_KEY}`);
