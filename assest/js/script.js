// Toggle the visibility of the menu (open/close)
function toggleMenu() {
  const menu = document.querySelector('.page-name');
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
  } else {
    menu.classList.add('show');
  }
}

// Close the menu when a menu item is clicked
function closeMenu() {
  const menu = document.querySelector('.page-name');
  menu.classList.remove('show'); // Remove the 'show' class to hide the menu
}

// Add event listener to each menu link to close the menu when clicked
document.querySelectorAll('.page-name a').forEach(item => {
  item.addEventListener('click', closeMenu);
});


// go back to top button
let mybutton = document.getElementById("backtoTopBtn");

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
                }, index * 150); // 100ms delay per card
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
    }, { threshold: 0.2 });

    packageCards.forEach(card => observer.observe(card));
});

// Send Mail Function
function sendMail() {
    const form = document.getElementById("contact-form");
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
  
    // Warning if fields are missing
    if (!email || !phone || !message) {
      Swal.fire({
        icon: "warning",
        title: "Almost There!",
        text: "Please complete all required fields to proceed.",
        confirmButtonText: "OK",
        customClass: {
          confirmButton: "swal2-custom-btn", // Use custom button style
        },
      });
      return;
    }
  
    // Show loading alert for sending
    Swal.fire({
      title: "Sending...",
      text: "Please wait while we send your message.",
      icon: "info",
      allowOutsideClick: false,
      customClass: {
        confirmButton: "swal2-custom-btn", // Use custom button style
      },
      didOpen: () => {
        Swal.showLoading();
      },
    });
  
    const params = { email, phone, message };
  
    emailjs
      .send("service_0gyzcta", "template_yukthbi", params)
      .then(
        () => {
          Swal.close(); // Close loading alert
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success",
            confirmButtonText: "OK",
            customClass: {
              confirmButton: "swal2-custom-btn", // Use custom button style
            },
          });
          form.reset();
        },
        () => {
          Swal.close(); // Close loading alert
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Please check your internet connection.",
            confirmButtonText: "Retry",
            customClass: {
              confirmButton: "swal2-custom-btn", // Use custom button style
            },
          });
        }
      );
  }  

// scroll with a href
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor behavior

      const targetId = this.getAttribute('href').substring(1); // Get the target ID (removes the "#")
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          // Scroll to the target element with an offset to account for fixed header
          window.scrollTo({
              top: targetElement.offsetTop - 60, // Adjust the offset to match your fixed header height
              behavior: 'smooth'
          });
      }
  });
});

// Go to Top Button with Smooth Scroll
document.getElementById("backtoTopBtn").addEventListener('click', function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});