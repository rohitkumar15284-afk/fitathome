// JavaScript functionality for the FixAtHome website

// Function to handle service selection
function chooseService(service) {
    document.getElementById('service').value = service;
}

// Function to handle form submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const address = document.getElementById('address').value;
    const date = document.getElementById('date').value;
    const problem = document.getElementById('problem').value;

    // Create a booking entry
    const bookingEntry = `
        <div class="booking-item">
            <h3>${service}</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Problem:</strong> ${problem}</p>
        </div>
    `;

    // Update the booking list
    const bookingList = document.getElementById('bookingList');
    bookingList.innerHTML = bookingList.innerHTML === 'No bookings yet.' ? bookingEntry : bookingList.innerHTML + bookingEntry;

    // Reset the form
    document.getElementById('bookingForm').reset();
});