import { ethers } from "hardhat";

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  // const lockedAmount = ethers.utils.parseEther("1");

  const VeeNFT = await ethers.getContractFactory("VeeNFT");
  const veeNFT = await VeeNFT.deploy("VEE", "Vic", "ipfs://QmNgmtCG3ZsX65v7t4DbbHxpZ8CRD6xx3X2sDgoSff88AJ");

  await veeNFT.deployed();

  console.log("VEE's NFT has been deployed to:  ", veeNFT.address );

  const Mint = await veeNFT.mint("0x049C780d7fa94AA70194eFC88ee109781eaeE1C2")

  console.log("the mint has been sent to:  ", Mint);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


//TRANSACTION HASH---- '0x3098e5e992c735ac1d1caaf726fd38db88ec23f8ea1d515acf69ede667d7e3d8'
//CONTRACT ADDRESS --- "0xa55774A55094493ac407d2e58a32E5771D66e79e"
//NFT LINK --- https://testnets.opensea.io/assets/rinkeby/0xa55774a55094493ac407d2e58a32e5771d66e79e/0/