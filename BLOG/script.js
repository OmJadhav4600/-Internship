// Toggle Search Bar
function toggleSearch() {
    const searchBar = document.querySelector('.search-bar');
    searchBar.classList.toggle('active');
}

// Smooth Scroll to Section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Filter Blog Posts by Category
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        filterPosts(category);
    });
});

function filterPosts(category) {
    const posts = document.querySelectorAll('.blog-card');
    posts.forEach(post => {
        if (category === 'all' || post.getAttribute('data-category') === category) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}

// Search Blog Posts
function searchPosts() {
    let query = document.getElementById("search-input").value.toLowerCase();
    let posts = document.querySelectorAll(".blog-card");

    posts.forEach(post => {
        let title = post.querySelector("h3").innerText.toLowerCase();
        if (title.includes(query)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
}

// Scroll to top button
const topButton = document.createElement('button');
topButton.innerText = "↑ Top";
topButton.classList.add("top-button");
document.body.appendChild(topButton);
topButton.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});
