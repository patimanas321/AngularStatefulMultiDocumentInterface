import { BankAccount, Transaction, Address, Notification } from "../models/account";

export const dummyAccounts = [
    new BankAccount(
        1,
        '987801',
        'John Doe',
        98875664.90,
        'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]
    ),
    new BankAccount(
        2,
        '987802',
        'Rupert Scrivener',
        10875664.90,
        'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(
        3,
        '987803',
        'Sue Birtwistle',
        20875664.90,
        'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]
    ),
    new BankAccount(
        4,
        '987804',
        'Smith Johns',
        10875664.90,
        'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(
        5,
        '987805',
        'Anna Tan',
        10875664.90,
        'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(
        6,
        '987806',
        'John Cena',
        10875664.90,
        'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(7,
        '987807',
        'Dowen Johnson',
        10875664.90,
        'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(8,
        '2387807',
        'Steev Jobs',
        10875634.90,
        'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(
        9,
        '987808',
        'Mark Jukerberg',
        10875664.90,
        'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(
        10,
        '987809',
        'The Rock',
        10875664.90,
        'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(
        11,
        '987810',
        'Jessica Alba',
        10875664.90,
        'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(
        12,
        '987811',
        'Kevin Petersion',
        988456764.90,
        'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]
    )
];