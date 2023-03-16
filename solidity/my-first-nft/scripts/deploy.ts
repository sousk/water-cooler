import { ethers } from "hardhat";

async function main(): Promise<void> {
    const MyNFT = await ethers.getContractFactory("MyNFT");

    const myNFT = await MyNFT.deploy();
    await myNFT.deployed();
    console.log("Contract deployed to:", myNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch((error: Error) => {
        console.error(error);
        process.exit(1);
    });
