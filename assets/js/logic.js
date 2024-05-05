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
    console.error("Error."); // Log an error if the form does not exist
}

// Form Submission Handling
document.addEventListener('DOMContentLoaded', function () {
    const blogForm = document.querySelector('#blog-form'); // Correctly reference the form

    if (blogForm) {
        blogForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form behavior

            const username = document.querySelector('#username').value.trim(); // Get form values
            const blogTitle = document.querySelector('#blog-title').value.trim();
            const blogContent = document.querySelector('#blog-content').value.trim();

            if (!username || !blogTitle || !blogContent) { // Validate fields
                alert("Please fill out all fields."); // If any field is empty
                return; // Prevent submission if validation fails
            }

            const newBlogPost = { username, title: blogTitle, content: blogContent };

            const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
            blogPosts.push(newBlogPost); // Add the new post to the list

            localStorage.setItem('blogPosts', JSON.stringify(blogPosts)); // Store updated list

            // Redirect to a new page (or handle in another way)
            window.location.href = 'blog.html'; // Example redirect after form submission
        });
    } else {
        console.error("Form element not found."); // Log an error if the form is missing
    }
});

