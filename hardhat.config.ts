import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-web3";
import "@typechain/hardhat";
import "hardhat-deploy";
import "@appliedblockchain/chainlink-plugins-fund-link";
import { task, subtask, types } from "hardhat/config";
import dotenv from "dotenv-safe";
dotenv.config();

task("balance", "Prints an account balance")
  .addParam("account", "The account's address", null, types.string)
  .setAction(async (taskArgs, { ethers }) => {
    const balance = await ethers.provider.getBalance(taskArgs.account);
    console.log(ethers.utils.formatEther(balance), "ETH");
  });

task("balance", "Prints account BALANCE").setAction(
  async (taskArgs, { ethers }, runSuper) => {
    if (runSuper.isDefined) {
      runSuper();
      const balance = await ethers.provider.getBalance(taskArgs.account);
      console.log(
        ethers.utils.formatEther(balance),
        "ETH is the account balance"
      );
    }
  }
);

task("hello-world", "Prints a hello world message").setAction(
  async (taskArgs, hre) => {
    await hre.run("print", { message: "Hello, World!" });
  }
);

subtask("print", "Prints a message")
  .addParam("message", "The message to print")
  .setAction(async (taskArgs) => {
    console.log(taskArgs.message);
  });

task("startLottery", "Starts the lottery")
  .addPositionalParam("address", "The address of the lottery contract")
  .setAction(async (args, { ethers }) => {
    const { address } = args;
    const Lottery = await ethers.getContractFactory("Lottery");
    const lottery = await Lottery.attach(address);
    await lottery.startLottery();
    console.log("Lottery started");
  });

task("enterLottery", "Enters the lottery")
  .addPositionalParam("address", "The address of the lottery contract")
  .setAction(async (args, { ethers }) => {
    const { address } = args;
    const Lottery = await ethers.getContractFactory("Lottery");
    const lottery = await Lottery.attach(address);
    const value = await lottery.getEntranceFee();
    await lottery.enter({ value: value });
    console.log("Entered lottery");
  });

task("fundWithLink", "Funds the lottery with LINK")
  .addPositionalParam("contractAddress", "The address of the lottery contract")
  .addPositionalParam("linkAddress", "The address of the LINK token")
  .setAction(async (args, { ethers }) => {
    const { contractAddress, linkAddress } = args;
    const LinkToken = await ethers.getContractFactory("LinkToken");
    const linkToken = await LinkToken.attach(linkAddress);
    await linkToken.transfer(contractAddress, 1000000000000000);
    console.log("Funded lottery with LINK");
  });

task("endLottery", "Ends the lottery")
  .addPositionalParam("address", "The address of the lottery contract")
  .setAction(async (args, { ethers }) => {
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
  networks: {
    hardhat: {
      forking: {
        url: process.env.ALCHEMY_MAINNET_URL,
        gas: 10000,
      },
    },
    rinkeby: {
      url: process.env.ALCHEMY_RINKEBY_URL || "",
      chainId: 4,
      accounts: [
        `0x${process.env.PRIVATE_KEY_DEPLOYER}`,
        `0x${process.env.PRIVATE_KEY_USER_2}`,
        `0x${process.env.PRIVATE_KEY_USER_3}`,
      ].filter((x) => x !== undefined),
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
      4: 0,
    },
    user2: {
      default: 1,
      4: 1,
    },
    user3: {
      default: 2,
      4: 2,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.4.11",
      },
      {
        version: "0.4.24",
      },
      {
        version: "0.6.6",
      },
      {
        version: "0.8.0",
      },
    ],
  },
  mocha: {
    timeout: 100000,
  },
};
