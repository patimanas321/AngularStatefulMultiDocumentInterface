import { BankAccount } from "./account";

export class AccountListViewModel {
    public searchedText: string;
    public accountsList: BankAccount[] = [];
    public selectedPage: number;
}