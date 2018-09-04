import { Address } from "./address";

export class BankAccount{
    constructor(
        public id: number,
        public number: string,
        public accountHolderName: string,
        public balance: number,
        public status: string,
        public credits: Transaction[],
        public debits: Transaction[],
        public accountHolderAddress: Address,
        public notifications: Notification[]
    ){

    }   
  }

  export class Transaction{
    constructor(
        public id: number,
        public account: string,
        public accountHolderName: string,
        public date: Date,
        public amount: number
    ){

    }
  }

  export class Notification{
    constructor(
        public message: string,
        public date: Date
    ){

    }
  }
