require("dotenv").config();

console.log("检查环境变量:");
console.log("SEPOLIA_RPC_URL 是否存在?", !!process.env.SEPOLIA_RPC_URL);
console.log("PRIVATE_KEY 是否存在?", !!process.env.PRIVATE_KEY);
console.log("PRIVATE_KEY 长度:", process.env.PRIVATE_KEY?.length);
console.log("ETHERSCAN_API_KEY 是否存在?", !!process.env.ETHERSCAN_API_KEY);