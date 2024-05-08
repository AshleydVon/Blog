// Toggle Mode Button
const toggleModeButton = document.querySelector('#toggle-mode');

toggleModeButton.addEventListener('click', function () {
    document.body.classList.toggle('light-mode'); // Toggle light mode
    document.body.classList.toggle('dark-mode'); // Toggle dark mode
});

// Form Submission Handling
document.addEventListener('DOMContentLoaded', function () {
    const blogForm = document.querySelector('#blog-form'); // Reference to the blog form

    if (blogForm) {
        let formSubmitted = false; // Flag to track if form has been submitted

        blogForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            // Check if form has already been submitted
            if (formSubmitted) {
                console.log("Form has already been submitted.");
                return; // Exit function if form has already been submitted
            }

            // Get form values
            const username = document.querySelector('#username').value.trim();
            const blogTitle = document.querySelector('#blog-title').value.trim();
            const blogContent = document.querySelector('#blog-content').value.trim();

            // Validate fields
            if (!username || !blogTitle || !blogContent) {
                alert("Please fill out all fields.");
                return; // Prevent submission if validation fails
            }

            // Set flag to indicate form submission
            formSubmitted = true;

            // Create new blog post object
            const newBlogPost = { username, title: blogTitle, content: blogContent };

            // Add the new blog post to the list
            const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
            blogPosts.push(newBlogPost);
            localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

            // Redirect to blog page after successful submission
            window.location.href = 'blog.html';
        });
    } else {
        console.log("Blog form element not found."); // Log an error if the form is missing
    }
});
