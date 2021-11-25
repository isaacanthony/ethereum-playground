pragma solidity ^0.5.0;

contract ENS {
  uint private cost = 5 wei;
  mapping (string => address) private ens;

  function setAddress(string calldata _name) external payable {
    require(msg.value >= cost);
    require(ens[_name] == address(0));
    ens[_name] = msg.sender;
  }

  function getAddress(string calldata _name) external view returns (address) {
    return ens[_name];
  }
}
