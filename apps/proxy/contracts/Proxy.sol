// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Proxy is Ownable {
  address private appAddress;

  function getAddress() public view onlyOwner returns (address) {
    return appAddress;
  }

  function setAddress(address _addr) public onlyOwner {
    appAddress = _addr;
  }
}
