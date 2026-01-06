require("dotenv").config({ path: require("path").join(__dirname, ".env") });

console.log("=== 环境变量诊断 ===");
console.log("当前目录:", __dirname);
console.log(".env 文件路径:", require("path").join(__dirname, ".env"));

console.log("\n=== 关键变量检查 ===");
console.log("SEPOLIA_RPC_URL:", process.env.SEPOLIA_RPC_URL ? "✓ 已加载" : "✗ 未找到");
if (process.env.SEPOLIA_RPC_URL) {
  console.log("  URL 长度:", process.env.SEPOLIA_RPC_URL.length);
  console.log("  URL 预览:", process.env.SEPOLIA_RPC_URL.substring(0, 30) + "...");
}

console.log("\nPRIVATE_KEY:", process.env.PRIVATE_KEY ? "✓ 已加载" : "✗ 未找到");
if (process.env.PRIVATE_KEY) {
  console.log("  私钥长度:", process.env.PRIVATE_KEY.length);
  console.log("  私钥预览:", process.env.PRIVATE_KEY.substring(0, 10) + "...");
  console.log("  是否包含0x前缀:", process.env.PRIVATE_KEY.startsWith("0x"));
}

console.log("\nETHERSCAN_API_KEY:", process.env.ETHERSCAN_API_KEY ? "✓ 已加载" : "✗ 未找到");
if (process.env.ETHERSCAN_API_KEY) {
  console.log("  API密钥预览:", process.env.ETHERSCAN_API_KEY.substring(0, 10) + "...");
}

console.log("\n=== 所有环境变量 ===");
console.log(Object.keys(process.env).filter(key => key.includes("PRIVATE") || key.includes("SEPOLIA") || key.includes("ETHERSCAN")));