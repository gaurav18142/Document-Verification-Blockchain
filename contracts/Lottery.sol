pragma solidity 0.4.17;
contract Notary {
address public manager;
struct Record {
    uint mineTime;
    uint blockNumber;
  }
mapping (bytes32 => Record) private docHashes;
function Notary() public
{
	manager=msg.sender;
}
function addDocHash (bytes32 hash)  public payable 
{
	require(manager==msg.sender);	
    Record memory newRecord = Record(block.timestamp, block.number);
    docHashes[hash] = newRecord;
}
function findDocHash (bytes32 hash) public view returns(uint, uint) {
    return (docHashes[hash].mineTime, docHashes[hash].blockNumber);
  }
}
