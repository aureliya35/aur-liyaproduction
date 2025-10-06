export default function handler(_req, res) {
  // Replace with real upstream calls if/when you have a bank API + keys.
  res.status(200).json({
    balance: 1250000.42,
    transactions: [
      { date: new Date().toISOString().slice(0,10), description: "Grant disbursement", amount: 25000 },
      { date: new Date(Date.now()-864e5).toISOString().slice(0,10), description: "Options settlement", amount: 7800 },
      { date: new Date(Date.now()-2*864e5).toISOString().slice(0,10), description: "Royalty sweep", amount: 11250 }
    ]
  });
}
