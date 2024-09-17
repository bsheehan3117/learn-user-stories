
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

    /**
     * Deposits money into an account.
     * @param accountNumber -- account number of the account
     * @param amount -- amount to deposit
     * @returns -- number -- the updated balance
     */
    public deposit(accountNumber: string, amount: number): number {
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error('Account not found');
        }
        account.balance += amount;
        return account.balance;
    }

}
