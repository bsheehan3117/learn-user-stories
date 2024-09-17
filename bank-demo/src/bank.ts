
//Indicates the type for all bank accounts in the bank
interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
}

/**
 * Bank class manages all bank accounts in bank.
 */
export default class Bank {

    // Array to store all accounts in the bank
    private accounts: BankAccount[] = [];

    /**
     * Finds an account in the bank using the account number.
     * @param {string} accountNumber The account number of the account to find.
     * @returns The account if found, otherwise undefined.
     */
    private findAccount(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(account => account.accountNumber === accountNumber);
    }

    /**
     * creates a new acct with a unique acct number.
     * @param name -- name of the account holder
     * @param age -- age of account holder
     * @param accountNumber -- account number of the account
     * @returns -- BankAccount -- the created account
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const isAcctExists = this.findAccount(accountNumber);
        if(isAcctExists) {
            throw new Error("Account already exists");
        }

        const account: BankAccount = {
            name,
            age,
            accountNumber,
            balance: 0
        };
        this.accounts.push(account);
        return account;
    }

}
