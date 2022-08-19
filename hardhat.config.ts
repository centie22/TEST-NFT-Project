import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require('dotenv').config();
//import "@nomiclabs/hardhat-ethers";
type HttpNetworkAccountUserConfig = any;
const {API_URL, PRIVATE_KEY} = process.env;
const config: HardhatUserConfig = {
  solidity: "0.8.9",
  defaultNetwork: "rinkeby",
  networks:{
    rinkeby:{
      url: API_URL,
      accounts:[PRIVATE_KEY] as HttpNetworkAccountUserConfig | undefined,
    }
  }
};

export default config;
