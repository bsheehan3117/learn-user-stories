import Bank from "../src/bank";

//setup 
const bank = new Bank();

//scenario 1 Account creation success
const account = bank.createAccount("John Doe", 29, "2938298");

if(account.accountNumber === "2938298"){
    console.log("Scenario 1 passed");
}
else{
    console.log("Scenario 1 failed");
}

//Scenario 2 Account creation failure
try {
    bank.createAccount("John Doe", 29, "2938298");
    console.log("Scenario 2 failed");
}
catch(_){
    console.log("Scenario 2 passed");
}

// Setup for deposit, withdraw, and check balance tests
bank.createAccount("Jane Doe", 25, "123456");

// Tests for deposit
// Scenario 1: Successful Deposit
try {
    const newBalance = bank.deposit("123456", 500);
    if (newBalance === 500) {
        console.log("Deposit Scenario 1 passed");
    } else {
        console.log("Deposit Scenario 1 failed");
    }
} catch (_) {
    console.log("Deposit Scenario 1 failed");
}

// Scenario 2: Failed Deposit
try {
    bank.deposit("999999", 500);
    console.log("Deposit Scenario 2 failed");
} catch (_) {
    console.log("Deposit Scenario 2 passed");
}