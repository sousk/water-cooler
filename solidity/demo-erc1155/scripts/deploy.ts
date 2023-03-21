import { ethers } from "hardhat";

async function main() {
  const factory = await ethers.getContractFactory("AwesomeGame");
  const [owner] = await ethers.getSigners();
  const contract = await factory.deploy();

  await contract.deployed();
  console.log("Contract deployed to:", contract.address);
  console.log("Contract deployed by:", owner.address);
  console.log("Tokens have been mented");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
