const Web3=require('web3');
const web3=new Web3("https://kovan.infura.io/v3/ac0a0e3049854328b505162678ed5543");
const Private_Key = "a6d49d470bb92210fbefaa8f3037ca0b4e6e606f0997dd4d75f5b25b7285d788"
const from_address="0xE6c5329453F4C650716B2dc04283A73e381c8750"
const to_address ="0xDCAB519AD714639B6E911C179F3f25344ED93193"

async function eth_transaction(){
 
    var value=web3.utils.toWei('0.1','ether')

    var signedTransaction = await web3.eth.accounts.signTransaction({
        to:to_address,
        value:value,
        gas:2000000
    },Private_Key);

    web3.eth.sendSignedTransaction(signedTransaction.rawTransaction)
    .then((reciept)=>{
        console.log(reciept);
        console.log("Contract Deployed At: ",reciept.contractAddress);
    });
}


    eth_transaction();


