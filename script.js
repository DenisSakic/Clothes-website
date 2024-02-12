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
  
  // Adding an event listener for scroll
  window.onscroll = function() {
    checkScroll();
  };
  
  // Adding event listener for arrow click
  document.getElementById("scrollToTop").addEventListener("click", scrollToTop);
  