import { ethers } from "hardhat";

async function main() {


  const VEEsNFT = await ethers.getContractFactory("VEEsNFT");
  const veesNFT = await VEEsNFT.deploy();

  await veesNFT.deployed();

  console.log("NFT has been deployed to: ",  veesNFT.address);

  const Mint = await veesNFT.safeMint("0x049C780d7fa94AA70194eFC88ee109781eaeE1C2", "ipfs://QmNgmtCG3ZsX65v7t4DbbHxpZ8CRD6xx3X2sDgoSff88AJ");
  console.log("our mint", Mint)

  // This is my contract address 0x45748698CBb8840424908aa6B85242080D22fA28
  // This is my url https://testnets.opensea.io/assets/rinkeby/0x45748698cbb8840424908aa6b85242080d22fa28/0
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// CONTRACTADDRESS on Rinkeby = 0x340bB5bC82c7bcEaF942f893Bef7216490781775
