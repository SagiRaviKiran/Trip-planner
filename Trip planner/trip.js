function addTrip() {
    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const activities = document.getElementById('activities').value;

    if (destination && startDate && endDate && activities) {
        const tripList = document.getElementById('tripList');
        
        const li = document.createElement('li');
        li.innerHTML = `<strong>Destination:</strong> ${destination}<br>
                        <strong>Start Date:</strong> ${startDate}<br>
                        <strong>End Date:</strong> ${endDate}<br>
                        <strong>Activities:</strong> ${activities}`;

        tripList.appendChild(li);

        document.getElementById('tripForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
}
