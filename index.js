
document.addEventListener("DOMContentLoaded", function () {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const userPostContainer = document.querySelector(".user-post-container");

    posts.slice().reverse().forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("user-post");
        postElement.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.description}</p>
        `;
        userPostContainer.appendChild(postElement);
    });
});

document.getElementById("post-button").addEventListener("click", function () {
    const title = document.getElementById("post-title").value.trim();
    const description = document.getElementById("post-description").value.trim();

    if (title && description) {
        const posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.push({ title, description });
        localStorage.setItem("posts", JSON.stringify(posts));

        document.getElementById("post-title").value = "";
        document.getElementById("post-description").value = "";
        alert("Post created successfully!");

        const userPostContainer = document.querySelector(".user-post-container");
        userPostContainer.innerHTML = ""; 
        posts.slice().reverse().forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("user-post");
            postElement.innerHTML = `
              <h3>${post.title}</h3>
              <p>${post.description}</p>
            `;
            userPostContainer.appendChild(postElement);
        });
    } else {
        alert("Please enter a title and description for your post.");
    }
});

document.getElementById("clear-history").addEventListener("click", function () {
    if (confirm("Are you sure you want to clear all post history?")) {
        localStorage.removeItem("posts"); 
        alert("Post history cleared!");
        
        
        const userPostContainer = document.querySelector(".user-post-container");
        if (userPostContainer) {
            userPostContainer.innerHTML = ""; 
        }
    }
});
