pragma solidity ^0.5.0;

contract ENS {
  mapping (string => address) ens;

  function setAddress(string memory _name) public {
    require(ens[_name] == address(0));
    ens[_name] = msg.sender;
  }

  function getAddress(string memory _name) public view returns (address) {
    return ens[_name];
  }
}
