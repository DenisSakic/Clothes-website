// A function that checks whether an arrow should be displayed
function checkScroll() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.classList.remove("hidden");
    } else {
      scrollToTopBtn.classList.add("hidden");
    }
  }
  
  // The function that is called when the arrow is clicked
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE i Opera
  }
  
  // Adding an event listener for scroll ...
  window.onscroll = function() {
    checkScroll();
  };
  
 // Adding event listener for arrow click
  document.getElementById("scrollToTop").addEventListener("click", scrollToTop);
  
// Select the shopping bag icon and the hamburger menu icon
const shoppingIcon = document.getElementById('shopping-icon');
const menuToggleIcon = document.getElementById('menu-toggle-icon');

// Function to change the icon
function toggleIcons() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1024) { // Set the desired screen width below which you want to display the hamburger icon
        shoppingIcon.style.display = 'none'; // Hide the shopping bag icon
        menuToggleIcon.style.display = 'inline-block'; // Display the hamburger icon
    } else {
        shoppingIcon.style.display = 'inline-block'; // Display the shopping bag icon
        menuToggleIcon.style.display = 'none'; // Hide the hamburger icon
    }
}

// We call the function to change the icon when the page loads and when the screen size changes
window.addEventListener('load', toggleIcons);
window.addEventListener('resize', toggleIcons);



document.getElementById('menu-toggle').addEventListener('click', function() {
  var menu = document.getElementById('mobile-menu');
  if (menu.style.display === 'none') {
      menu.style.display = 'block';
  } else {
      menu.style.display = 'none';
  }
});









