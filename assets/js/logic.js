// Toggle Mode Button
const toggleModeButton = document.querySelector('#toggle-mode');

toggleModeButton.addEventListener('click', function () {
    document.body.classList.toggle('light-mode'); // Toggle light mode
    document.body.classList.toggle('dark-mode'); // Toggle dark mode
});

// Form Submission Handling
const sampleForm = document.querySelector('#sample-form'); // Reference to the form

if (sampleForm) {
    sampleForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form behavior

        const name = document.querySelector('#name').value.trim(); // Get input values
        const email = document.querySelector('#email').value.trim();

        if (!name || !email) { // Validate form fields
            alert("Please fill out all fields."); // Alert if any field is empty
            return; // Exit if any field is empty
        }

        // Store data in local storage (for example, you can adapt this as needed)
        const formData = { name, email };
        localStorage.setItem('formData', JSON.stringify(formData));

        console.log("Form submitted successfully!"); // Indicate form submission

        // Optionally, redirect to another page or perform other actions
    });
} else {
    console.error("Form element not found."); // Log an error if the form does not exist
}
