// Function to load blog posts from localStorage
function loadBlogPosts() {
    const postList = document.querySelector('#post-list'); // Blog post list reference
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || []; // Retrieve blog posts from localStorage

    postList.innerHTML = ''; // Clear any existing posts

    storedPosts.forEach((post) => {
        const postDiv = document.createElement('div');
        postDiv.className = 'blog-post';
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p class="author">By: ${post.username}</p>
        `;
        postList.appendChild(postDiv); // Add to the post list
    });
}

// Load blog posts when the page is loaded
window.onload = loadBlogPosts;

// Back button logic
document.querySelector('#back-to-form').addEventListener('click', function () {
    window.history.back(); // Use history.back() to navigate back
});
