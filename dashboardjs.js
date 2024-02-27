const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let donors = [
  { rank: 1, name: 'Aditya', bloodGroup: 'O+', location: 'Dhanbad', donations: 10 },
  { rank: 2, name: 'Sona', bloodGroup: 'B-', location: 'Bokaro', donations: 7},
  { rank: 3, name: 'Shivam', bloodGroup: 'AB+', location: 'Bokaro', donations: 6 }
];

app.get('/getDonors', (req, res) => {
  res.json({ donors });
});

app.post('/addDonor', (req, res) => {
  const newDonor = req.body;

  // Update rank and add the new donor
  newDonor.rank = donors.length + 1;
  donors.push(newDonor);

  // Sort donors based on the number of donations
  donors.sort((a, b) => b.donations - a.donations);

  // Update ranks
  donors.forEach((donor, index) => {
    donor.rank = index + 1;
  });

  // Send a response
  res.json({ message: 'Donor added successfully!', donors });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
