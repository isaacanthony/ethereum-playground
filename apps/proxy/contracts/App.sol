// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract App {
  using SafeMath for uint;

  function add(uint _a, uint _b) public pure returns (uint) {
    return _a.add(_b);
  }
}
