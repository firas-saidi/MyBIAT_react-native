export const ACCOUNTS = [
    {
        id: "1",
        name: "Compte Chèque",
        number: "12 345 678 901 23",
        balance: "1 250,500",
        currency: "TND",
        type: "checking",
    },
    {
        id: "2",
        name: "Compte Épargne",
        number: "98 765 432 109 87",
        balance: "5 000,000",
        currency: "TND",
        type: "savings",
    },
];

export const TRANSACTIONS = [
    {
        id: "1",
        title: "Virement reçu",
        date: "22 Nov 2023",
        amount: "+ 500,000 TND",
        type: "credit",
    },
    {
        id: "2",
        title: "Paiement STEG",
        date: "20 Nov 2023",
        amount: "- 120,000 TND",
        type: "debit",
    },
    {
        id: "3",
        title: "Retrait GAB",
        date: "18 Nov 2023",
        amount: "- 50,000 TND",
        type: "debit",
    },
];

export const CARDS = [
    {
        id: "1",
        type: "Visa",
        number: "**** **** **** 1234",
        expiry: "12/25",
        holder: "Foulen Ben Foulen",
        status: "Active",
        balance: "1 250,500 TND",
    },
    {
        id: "2",
        type: "Mastercard",
        number: "**** **** **** 5678",
        expiry: "06/24",
        holder: "Foulen Ben Foulen",
        status: "Bloquée",
        balance: "500,000 TND",
    },
];
