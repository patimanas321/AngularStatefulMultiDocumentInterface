import { Application, ApplicationType, ApplicantPersonalDetails, ApplicantIncomeDetails } from "../models/application";
import { Address } from "../models/address";

export const dummyApplications = [
    new Application(
        1,
        '86754656789986',
        'Pending',
        ApplicationType.SavingsAccount,
        new ApplicantPersonalDetails(
            'Pankaj Thakre',
            new Date(1991, 2, 2),
            'bx8678g99j',
            '7896456724',
            new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776')
        ),
        new ApplicantIncomeDetails('Service', 6864466, 'Wipro', 3.4)
    ),
    new Application(
        2,
        '86754656789987',
        'Pending',
        ApplicationType.CurrentAccount,
        new ApplicantPersonalDetails(
            'Brijesh Ghutugade',
            new Date(1991, 2, 2),
            'bx8678g99j',
            '7896456724',
            new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776')
        ),
        new ApplicantIncomeDetails('Service', 6864466, 'Wipro', 3.4)
    ),
    new Application(
        3,
        '86754656789988',
        'Pending',
        ApplicationType.CreditCard,
        new ApplicantPersonalDetails(
            'Divya Jha',
            new Date(1991, 2, 2),
            'bx8678g99j',
            '7896456724',
            new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776')
        ),
        new ApplicantIncomeDetails('Service', 6864466, 'Wipro', 3.4)
    ),
    new Application(
        4,
        '86754656789988',
        'Pending',
        ApplicationType.FixedDeposit,
        new ApplicantPersonalDetails(
            'Anish Patel',
            new Date(1991, 2, 2),
            'bx8678g99j',
            '7896456724',
            new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776')
        ),
        new ApplicantIncomeDetails('Service', 6864466, 'Wipro', 3.4)
    ),
    new Application(
        5,
        '86754656789989',
        'Pending',
        ApplicationType.SavingsAccount,
        new ApplicantPersonalDetails(
            'Asish Agrawal',
            new Date(1991, 2, 2),
            'bx8678g99j',
            '7896456724',
            new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776')
        ),
        new ApplicantIncomeDetails('Service', 6864466, 'Wipro', 3.4)
    ),
    new Application(
        6,
        '86754656789990',
        'Pending',
        ApplicationType.CurrentAccount,
        new ApplicantPersonalDetails(
            'Rupesh Jawale',
            new Date(1991, 2, 2),
            'bx8678g99j',
            '7896456724',
            new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776')
        ),
        new ApplicantIncomeDetails('Service', 6864466, 'Wipro', 3.4)
    ),
];