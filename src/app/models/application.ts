import { Address } from "./address";

export class Application{
    constructor(
        public id: number,
        public number: string,
        public status: string,
        public applicationType: ApplicationType,
        public personalDetails: ApplicantPersonalDetails,
        public incomeDetails: ApplicantIncomeDetails
    ){
        
    }   
  }

export class ApplicantPersonalDetails{
    constructor(
        public fullName: string,
        public dateOfBirth: Date,
        public panNo: string,
        public customerId: string,
        public address: Address
    ){
        
    } 
}

export class ApplicantIncomeDetails{
    constructor(
        public occupation: string,
        public annualIncome: Number,
        public currentEmployerName: string,
        public totalExperienceInYears: Number
    ){
        
    } 
}

export enum ApplicationType{
    SavingsAccount,
    CurrentAccount,
    CreditCard,
    FixedDeposit,
}