// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract HealthyChain {
  uint public storedData = 20;

  function set(uint x) public {
    storedData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }
}
