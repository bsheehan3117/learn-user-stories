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

// Tests for withdraw
// Scenario 1: Successful Withdrawal
try {
    const newBalance = bank.withdraw("123456", 200);
    if (newBalance === 300) {
        console.log("Withdraw Scenario 1 passed");
    } else {
        console.log("Withdraw Scenario 1 failed");
    }
} catch (_) {
    console.log("Withdraw Scenario 1 failed");
}

// Scenario 2: Failed Withdrawal (Insufficient Balance)
try {
    bank.withdraw("123456", 1000);
    console.log("Withdraw Scenario 2 failed");
} catch (_) {
    console.log("Withdraw Scenario 2 passed");
}

// Scenario 3: Failed Withdrawal (Invalid Account)
try {
    bank.withdraw("999999", 200);
    console.log("Withdraw Scenario 3 failed");
} catch (_) {
    console.log("Withdraw Scenario 3 passed");
}
