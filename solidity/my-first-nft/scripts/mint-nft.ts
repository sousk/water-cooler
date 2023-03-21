import dotenv from "dotenv";
import { ethers } from "ethers";
import {
  Alchemy,
  Network,
  Contract,
  Wallet,
  TransactionRequest,
} from "alchemy-sdk";
import contract from "../artifacts/contracts/MyNFT.sol/MyNFT.json";

dotenv.config();
const { PUBLIC_KEY, PRIVATE_KEY } = process.env;

const contractAddress = "0x2057b522b377ac01b16075d6c63bb730d9ec77d8";
const tokenURI = "ipfs://QmcjU6kagwn3X5FDeNZ4ejmG3XWdVrbUpcRzkcEyctfnvU";

const NETWORK ='goerli'
const API_KEY = process.env.GOERLI_API_KEY;

const provider = new ethers.providers.AlchemyProvider(NETWORK, API_KEY);
const wallet = new ethers.Wallet(PRIVATE_KEY as string, provider);

const nftContract = new Contract(contractAddress, contract.abi, wallet);

async function mintNFT() {
  let nftTxn = await nftContract.mintNFT(wallet.address, tokenURI);
  await nftTxn.wait();
  console.log(`NFT Minted: https://goerli.etherscan.io/tx/${nftTxn.hash}`);
}

mintNFT()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
