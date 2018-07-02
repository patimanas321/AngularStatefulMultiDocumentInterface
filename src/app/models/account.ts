export class BankAccount{
    constructor(
        public id: number,
        public number: string,
        public accountHolderName: string,
        public balance: number,
        public status: string
    ){

    }   
  }