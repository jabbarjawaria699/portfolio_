// On Scroll Animation
const hidden_elements = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show')
        }
    })
});

hidden_elements.forEach(el => {
    observer.observe(el);
});

// Get all navbar links
const navLinks = document.querySelectorAll('nav ul li a');

// Function to remove the active class from all links
function removeActiveClass() {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

// Add click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Remove active class from all links
        removeActiveClass();
        
        // Add active class to the clicked link
        e.target.classList.add('active');
    });
});
