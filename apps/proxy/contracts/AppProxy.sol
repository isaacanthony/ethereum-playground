// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/proxy/Proxy.sol";

contract AppProxy is Ownable, Proxy {
  address private delegateAddress;

  function getAddress() public view onlyOwner returns (address) {
    return delegateAddress;
  }

  function setAddress(address _addr) public onlyOwner {
    delegateAddress = _addr;
  }

  function _implementation() internal view virtual override returns (address) {
    return delegateAddress;
  }
}
