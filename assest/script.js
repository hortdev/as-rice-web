// saerch icon animation style
const searchInput = document.querySelector('.search');
    const searchBox = document.querySelector('.search-box');

    // When the input is focused, add the 'focused' class to the search box
    searchInput.addEventListener('focus', () => {
        searchBox.classList.add('focused');
    });

    // When the input is blurred (focus removed), remove the 'focused' class
    searchInput.addEventListener('blur', () => {
        searchBox.classList.remove('focused');
    });

// go back to top button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// JavaScript for staggered animation with Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.service-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Use a staggered delay for each card
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 150); // Delay of 150ms per card
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.3 }); // Trigger when 30% of the card is in view
    
    // Observe each card for intersection
    cards.forEach(card => observer.observe(card));
});

// JavaScript for staggered animation with Intersection Observer in categories-section
document.addEventListener("DOMContentLoaded", () => {
    const categoryCards = document.querySelectorAll('.category-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Apply staggered animation delay
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 100); // 100ms delay per card
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of the card is in view
    
    categoryCards.forEach(card => observer.observe(card));
});

document.addEventListener("DOMContentLoaded", () => {
    const packageCards = document.querySelectorAll('.package-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate'); // Add animation class with delay
                }, index * 150); // 150ms delay between each card
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.3 });

    packageCards.forEach(card => observer.observe(card));
});

// Send Mail Function
function sendMail(){
    let parms = {
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_0gyzcta","template_yukthbi",parms).then(alert("Email Sent!"))
}