require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.SEPOLIA_PRIVATE_KEY]
    }
    // 暂时注释掉 amoy 网络，因为你没有配置它
    // amoy: {
    //   url: process.env.POLYGON_AMOY_RPC_URL,
    //   accounts: [process.env.SEPOLIA_PRIVATE_KEY]
    // }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};