const output = document.querySelector("#output");
const button = document.querySelector("#get-pst-btn");

let posts = [
    {id: 1, title: "This is the first post"},
    {id: 2, title: "This is the second post"},
    {id: 3, title: "This is the third post"}
];

posts = undefined;

// Function to render posts
function renderPosts(posts) {
    output.innerHTML = ""; // Clear existing content
    posts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.textContent = post.title;
        output.appendChild(postEl);
    });
}

// Function to show all posts
function showPosts() {
    try {
        // Assuming newPosts logic is required here, otherwise, remove the condition
        if (posts && posts.length > 0) {
            renderPosts(posts);
        } else {
            throw new Error("Posts not found");
        }
    } catch (error) {
        console.error(error.message);
    }
}

// Add event listener to the button
button.addEventListener('click', showPosts);
