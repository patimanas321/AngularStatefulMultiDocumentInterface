import { BankAccount } from "./account";

export class AccountViewModel {
    actualData: BankAccount = null;
    infoSectionVisible: boolean = false;
    creditsSectionVisible: boolean = false;
    debitsSectionVisible: boolean = false;
    addressSectionVisible: boolean = false;
    notificationSectionVisible: boolean = false;
}