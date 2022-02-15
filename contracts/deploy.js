const HDWalletProvider=require('truffle-hdwallet-provider');
const Web3=require('web3');
const {interface,bytecode} = require('./compile');

console.log(interface);

const provider = new HDWalletProvider('medal want sister battle marine slice fine cycle burden parade wood essence',
'https://rinkeby.infura.io/v3/31f9f1c4f468403a845983336c77b96b');


const web3=new Web3(provider);

const deploy = async () => {
  const accounts= await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);
  const result=await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data:bytecode})
  .send({gas:'1000000',from: accounts[0]});
  console.log(interface);
  console.log('Contract deployed to',result.options.address);
};
deploy();
