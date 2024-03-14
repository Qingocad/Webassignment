document.addEventListener('DOMContentLoaded', function() {
    console.log('Welcome to the Lolita Fashion Info website!');
});
// Function to fetch and display the content for the clicked section
function loadSection(section) {
    const contentDiv = document.getElementById('main-content');
    contentDiv.innerHTML = `<h2>${section.charAt(0).toUpperCase() + section.slice(1).replace(/-/g, ' ')}</h2>`;
    contentDiv.innerHTML += `<p>Loading content for ${section}...</p>`;
    // Here you would make an AJAX request or import content for the section
    // For this example, we will just simulate content loading
    setTimeout(() => {
        contentDiv.innerHTML += `<p>Content for ${section} has been loaded!</p>`;
    }, 1000);
}



function loadHTMLContent(url) {
    // Existing code to load HTML content
    fetch(url)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const content = doc.body.innerHTML; // Adjust this if needed
            const contentDiv = document.getElementById('main-content');
            contentDiv.innerHTML = content;
        })
        .catch(error => {
            console.error('Error loading the HTML content:', error);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav ul');
    const mainTitle = document.getElementById('main-title');

    mainTitle.addEventListener('click', function() {
        loadHTMLContent('default.html');
    });

    nav.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            event.preventDefault(); // Prevent the default anchor behavior
            const href = event.target.getAttribute('href');
            loadHTMLContent(href);
        }
    });

    // Load default.html content initially
    loadHTMLContent('default.html');
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('.bodyHeader');
    var headerPosition = header.getBoundingClientRect().top;
    if (window.pageYOffset > 210) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});