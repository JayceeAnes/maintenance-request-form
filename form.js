document.getElementById('repairForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const formData = {
        requestDate: document.getElementById('requestDate').value,
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        department: document.getElementById('department').value,
        typeOfIssue: document.getElementById('typeOfIssue').value,
        description: document.getElementById('description').value,
        area: document.getElementById('area').value,
        urgency: document.getElementById('urgency').value,
        status: 'follow-up' // Initial status
    };

    // Store in localStorage or send to a backend
    let maintenanceRequests = JSON.parse(localStorage.getItem('maintenanceRequests')) || [];
    maintenanceRequests.push(formData);
    localStorage.setItem('maintenanceRequests', JSON.stringify(maintenanceRequests));

    alert('Maintenance request submitted successfully!');
    document.getElementById('repairForm').reset();
});
