document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginResponse = document.getElementById('login-response');
    const dashboardSection = document.getElementById('dashboard-section');
    const logoutButton = document.getElementById('logout-button');

    // Check if user is already logged in
    if (window.location.pathname.includes('dashboard.html') && !localStorage.getItem('loggedIn')) {
        window.location.href = 'index.html'; // Redirect to login if not logged in
    }

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Simple authentication check (replace with real authentication logic)
            if (username === 'doctor' && password === 'password123') {
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'dashboard.html'; // Redirect to dashboard on success
            } else {
                loginResponse.textContent = 'Invalid credentials, please try again.';
            }
        });
    }

    // Handle logout
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('loggedIn');
            window.location.href = 'index.html'; // Redirect to login page on logout
        });
    }

    // Handle consultation form submission
    const consultationForm = document.getElementById('consultation-form');
    const consultationResponse = document.getElementById('consultation-response');

    if (consultationForm) {
        consultationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const issue = document.getElementById('issue').value;

            // Simulate server response
            setTimeout(() => {
                consultationResponse.textContent = `Thank you, ${name}. Your consultation request has been received.`;
            }, 1000); // Simulate network delay
        });
    }

    // Handle health monitoring form submission
    const monitoringForm = document.getElementById('monitoring-form');
    if (monitoringForm) {
        monitoringForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const temperature = parseFloat(document.getElementById('temperature').value);
            const bloodPressure = document.getElementById('blood-pressure').value;

            // Simulate health suggestions
            setTimeout(() => {
                let suggestion = '';
                if (temperature > 37.5) {
                    suggestion += 'Your temperature is higher than normal. Consider seeing a healthcare professional.\n';
                } else {
                    suggestion += 'Your temperature is normal.\n';
                }

                const [systolic, diastolic] = bloodPressure.split('/').map(num => parseInt(num, 10));
                if (systolic > 140 || diastolic > 90) {
                    suggestion += 'Your blood pressure is high. It is advisable to consult with a doctor.\n';
                } else {
                    suggestion += 'Your blood pressure is within normal ranges.\n';
                }

                document.getElementById('health-suggestions').textContent = suggestion;
            }, 1000); // Simulate network delay
        });
    }

    // Handle medicine suggestions form submission
    const medicineForm = document.getElementById('medicine-form');
    if (medicineForm) {
        medicineForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const symptoms = document.getElementById('symptoms').value.toLowerCase();

            // Simulate medicine suggestions
            setTimeout(() => {
                let suggestion = 'Based on your symptoms, here are some general suggestions:\n';

                if (symptoms.includes('fever')) {
                    suggestion += '- Acetaminophen (Tylenol) or Ibuprofen (Advil) may help reduce fever.\n';
                }

                if (symptoms.includes('cough')) {
                    suggestion += '- Cough syrup or lozenges might help with a cough.\n';
                }

                if (symptoms.includes('headache')) {
                    suggestion += '- Over-the-counter pain relievers like Ibuprofen or Aspirin could relieve headaches.\n';
                }

                if (symptoms.includes('cold')) {
                    suggestion += '- Decongestants and antihistamines might relieve cold symptoms.\n';
                }

                document.getElementById('medicine-response').textContent = suggestion;
            }, 1000); // Simulate network delay
        });
    }
});