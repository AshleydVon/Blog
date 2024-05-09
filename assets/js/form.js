onst blogForm = document.querySelector('#blog-form'); // Correctly reference the form

// Ensure the event listener is attached and prevents default behavior

    const username = document.querySelector('#username').value.trim(); // Get input values
    const blogTitle = document.querySelector('#blog-title').value.trim();
    const blogContent = document.querySelector('#blog-content').value.trim();

    if (!username || !blogTitle || !blogContent) { // Validate the fields
        alert("Please fill out all fields."); // Alert if any field is empty
        return; // Exit if any field is empty
    }

    // Store the form data in local storage (or perform another action)
    const newBlogPost = {
        username,
        title: blogTitle,
        content: blogContent,
    };

    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || []; // Get existing blog posts
    blogPosts.push(newBlogPost); // Add the new post

    localStorage.setItem('blogPosts', JSON.stringify(blogPosts)); // Save to local storage

    // Redirect to another page or update the UI (optional) console.log("Form submitted and data saved");
});