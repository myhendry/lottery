const { NETWORK } = require("../types");

const config = {
  [NETWORK.HARDHAT]: {
    name: "hardhat",
    price_feed_address: "0x9326BFA02ADD2366b30bacB125260Af641031331",
    keyHash:
      "0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4",
    fee: "0.1",
    fundAmount: "10000000000000000000",
  },
  [NETWORK.RINKEBY]: {
    name: "rinkeby",
    price_feed_address: "0x9326BFA02ADD2366b30bacB125260Af641031331",
    linkToken: "0x01BE23585060835E02B77ef475b0Cc51aA1e0709",
    vrfCoordinator: "0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B",
    keyHash:
      "0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311",
    fee: "0.1",
    fundAmount: "2000000000000000000",
  },
};

module.exports = {
  config,
};
