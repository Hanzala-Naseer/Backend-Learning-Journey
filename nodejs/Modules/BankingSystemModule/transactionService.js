function deposit(amount){
    console.log(`${amount} PKR has been deposited successfully.`);
}

function withdraw(amount){
    console.log(`${amount} PKR has been withdrawn successfully.`);

}function checkBalance(){
    console.log(`Available Balance: 10000 PKR`);
}

module.exports={
    deposit,
    withdraw,
    checkBalance
}
