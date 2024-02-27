const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use middleware to parse JSON and urlencoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Array to store booked appointments (you might want to use a database in a real-world scenario)
const bookedAppointments = [];

// Endpoint to handle booking appointments
app.post('/bookAppointment', (req, res) => {
  const appointmentDetails = req.body;

  // Add additional validation if needed

  // Add the appointment to the bookedAppointments array
  bookedAppointments.push(appointmentDetails);

  // Send a response (you might want to handle errors and success cases appropriately)
  res.json({ message: 'Appointment booked successfully!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
