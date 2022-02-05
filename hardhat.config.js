require("dotenv-safe").config();

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");
require("@appliedblockchain/chainlink-plugins-fund-link");

task("startLottery", "Starts the lottery")
  .addPositionalParam("address", "The address of the lottery contract")
  .setAction(async (args) => {
    const { address } = args;
    const Lottery = await ethers.getContractFactory("Lottery");
    const lottery = await Lottery.attach(address);
    await lottery.startLottery();
    console.log("Lottery started");
  });

task("enterLottery", "Enters the lottery")
  .addPositionalParam("address", "The address of the lottery contract")
  .setAction(async (args) => {
    const { address } = args;
    const Lottery = await ethers.getContractFactory("Lottery");
    const lottery = await Lottery.attach(address);
    const value = await lottery.getEntranceFee();
    await lottery.enter((overrides = { value: value }));
    console.log("Entered lottery");
  });

task("fundWithLink", "Funds the lottery with LINK")
  .addPositionalParam("contractAddress", "The address of the lottery contract")
  .addPositionalParam("linkAddress", "The address of the LINK token")
  .setAction(async (args) => {
    const { contractAddress, linkAddress } = args;
    const LinkToken = await ethers.getContractFactory("LinkToken");
    const linkToken = await LinkToken.attach(linkAddress);
    await linkToken.transfer(contractAddress, 1000000000000000);
    console.log("Funded lottery with LINK");
  });

task("endLottery", "Ends the lottery")
  .addPositionalParam("address", "The address of the lottery contract")
  .setAction(async (args) => {
    const { address } = args;
    const Lottery = await ethers.getContractFactory("Lottery");
    const lottery = await Lottery.attach(address);
    const winner = await lottery.endLottery();
    console.log(winner + " won the lottery");
  });

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.4.11",
      },
      {
        version: "0.4.24",
      },
      {
        version: "0.8.0",
      },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.ALCHEMY_MAINNET_URL,
        gas: 10000,
      },
    },
    rinkeby: {
      url: process.env.ALCHEMY_RINKEBY_URL,
      accounts: [
        `0x${process.env.PRIVATE_KEY_DEPLOYER}`,
        `0x${process.env.PRIVATE_KEY_USER_2}`,
        `0x${process.env.PRIVATE_KEY_USER_3}`,
      ],
      timeout: 60000,
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
  mocha: {
    timeout: 100000,
  },
};
