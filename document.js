document.addEventListener('DOMContentLoaded', function () {
  const donorForm = document.getElementById('donorForm');
  const appointmentForm = document.getElementById('appointmentForm');
  const donorInfo = document.getElementById('donorInfo');

  // Function to display donor information
  function displayDonorInfo(donor) {
    donorInfo.innerHTML = `
      <h2>Donor Information</h2>
      <p><strong>Name:</strong> ${donor.name}</p>
      <p><strong>Blood Group:</strong> ${donor.bloodGroup}</p>
      <p><strong>Email:</strong> ${donor.email}</p>
      <p><strong>Phone:</strong> ${donor.phone}</p>
      <h3>Appointments</h3>
      <ul>
        ${donor.appointments.map(appointment => `
          <li>
            <strong>Hospital:</strong> ${appointment.hospital}, 
            <strong>Date:</strong> ${appointment.date}, 
            <strong>Time:</strong> ${appointment.time}
          </li>
        `).join('')}
      </ul>
    `;
  }

  // Event listener for donor registration form submission
  donorForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const bloodGroup = document.getElementById('bloodGroup').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Register the new donor
    fetch('/donors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `name=${encodeURIComponent(name)}&bloodGroup=${encodeURIComponent(bloodGroup)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}`,
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Display donor information
          displayDonorInfo(data.newDonor);
        } else {
          console.error('Error:', data.message);
        }
      })
      .catch(error => console.error('Error:', error));
  });

  // Event listener for appointment scheduling form submission
  appointmentForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const donorEmail = document.getElementById('donorEmail').value;
    const hospital = document.getElementById('hospital').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Schedule an appointment
    fetch('/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `donorEmail=${encodeURIComponent(donorEmail)}&hospital=${encodeURIComponent(hospital)}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}`,
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Display donor information
          displayDonorInfo(data.donor);
          // Show thank you message and redirect after a delay
          setTimeout(() => {
            alert('Thank you! Your appointment is booked.');
            window.location.href = '/'; // Redirect to the home page
          }, 1000); // Delay in milliseconds (1 second in this example)
        } else {
          console.error('Error:', data.message);
        }
      })
      .catch(error => console.error('Error:', error));
  });
});
