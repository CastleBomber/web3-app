// https://eth-sepolia.g.alchemy.com/v2/b0XcgS3ujojarM3YG4AonyFLj9ySY90v

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/b0XcgS3ujojarM3YG4AonyFLj9ySY90v",
      accounts: [
        "0c807c88644d7ddf623611018ec39d7743b3283c11bb3a62fe7867e1ee82f26c",
      ],
    },
  },
};
