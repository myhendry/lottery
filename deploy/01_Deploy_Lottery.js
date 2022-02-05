const { config } = require("../config/chainlink.config");
const { NETWORK } = require("../types");

module.exports = async ({
  getNamedAccounts,
  deployments,
  getChainId,
  ethers,
}) => {
  const { deploy, get, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  let linkToken;
  let linkTokenAddress;
  let vrfCoordinatorMock;
  let vrfCoordinatorAddress;
  let priceFeedAddress;
  let additionalMessage = "";

  if (chainId == NETWORK.HARDHAT) {
    linkToken = await get("LinkToken");
    linkTokenAddress = linkToken.address;
    vrfCoordinatorMock = await get("VRFCoordinatorMock");
    vrfCoordinatorAddress = vrfCoordinatorMock.address;
    priceFeedAddress = config[chainId].price_feed_address;
    additionalMessage =
      " --linkaddress " +
      linkTokenAddress +
      " --fundamount " +
      config[chainId].fundAmount;
  } else {
    priceFeedAddress = config[chainId].price_feed_address;
    linkTokenAddress = config[chainId].linkToken;
    vrfCoordinatorAddress = config[chainId].vrfCoordinator;
  }

  const keyHash = config[chainId].keyHash;
  const fee_payable = config[chainId].fee;

  const lottery = await deploy("Lottery", {
    from: deployer,
    args: [
      priceFeedAddress,
      vrfCoordinatorAddress,
      linkTokenAddress,
      ethers.utils.parseUnits(fee_payable, 18),
      keyHash,
    ],
    log: true,
  });

  log("Run the following command to fund contract with LINK:");
  log(
    "npx hardhat fund-link --contract " +
      lottery.address +
      " --network " +
      config[chainId].name +
      additionalMessage
  );
  log("----------------------------------------------------");
};

module.exports.tags = ["all", "main"];
