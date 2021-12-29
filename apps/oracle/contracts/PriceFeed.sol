// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceFeed {
  AggregatorV3Interface private priceFeed;

  constructor(address _oracleAddress) {
    priceFeed = AggregatorV3Interface(_oracleAddress);
  }

  function isAlive() public pure returns (bool) {
    return true;  // health check
  }

  function getLatestPrice() public view returns (int) {
    (, int price, , ,) = priceFeed.latestRoundData();
    return price / 1e8;  // ETH-USD price is scaled up by 1e8
  }
}
