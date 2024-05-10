const toggleModeButton = document.querySelector('#toggle-mode');

toggleModeButton.addEventListener('click', function () {
    document.body.classList.toggle('light-mode'); 
    document.body.classList.toggle('dark-mode'); 
});


document.addEventListener('DOMContentLoaded', function () {
    const blogForm = document.querySelector('#blog-form'); 

    if (blogForm) {
        let formSubmitted = false; 

        blogForm.addEventListener('submit', function (event) {
            event.preventDefault(); 

            
            if (formSubmitted) {
                console.log("Form has already been submitted.");
                return; 
            }

       
            const username = document.querySelector('#username').value.trim();
            const blogTitle = document.querySelector('#blog-title').value.trim();
            const blogContent = document.querySelector('#blog-content').value.trim();

          
            if (!username || !blogTitle || !blogContent) {
                alert("Please fill out all fields.");
                return; 
            }

            
            formSubmitted = true;

            
            const newBlogPost = { username, title: blogTitle, content: blogContent };

            
            const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
            blogPosts.push(newBlogPost);
            localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

            
            window.location.href = 'blog.html';
        });
    } else {
        console.log("Blog form element not found."); 
    }
});