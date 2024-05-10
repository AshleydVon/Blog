const blogForm = document.querySelector('#blog-form'); 



    const username = document.querySelector('#username').value.trim(); 
    const blogTitle = document.querySelector('#blog-title').value.trim();
    const blogContent = document.querySelector('#blog-content').value.trim();

    if (!username || !blogTitle || !blogContent) { 
        alert("Please fill out all fields."); 
        return; 
    }

    
    const newBlogPost = {
        username,
        title: blogTitle,
        content: blogContent,
    };

    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || []; 
    blogPosts.push(newBlogPost); 

    localStorage.setItem('blogPosts', JSON.stringify(blogPosts)); 

});