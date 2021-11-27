pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract ENS is Ownable {
  uint private cost = 5 wei;
  mapping (string => address) private ens;

  function getAddress(string calldata _name) external view returns (address) {
    return ens[_name];
  }

  function setAddress(string calldata _name) external payable {
    require(msg.value >= cost);
    require(ens[_name] == address(0));
    ens[_name] = msg.sender;
  }

  function getCost() external view returns (uint) {
    return cost;
  }

  function setCost(uint _cost) public onlyOwner {
    require(_cost > 0);
    cost = _cost;
  }
}
