import { HardhatUserConfig } from "hardhat/config";
// import { API_URL } from "dotenv";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  // defaultNetwork: "sepolia",
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: process.env.GOERLI_API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    sepolia: {
      url: process.env.SEPOLIA_API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  }
};

export default config;
