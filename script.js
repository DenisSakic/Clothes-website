// Funkcija koja provjerava da li treba prikazati strelicu
function checkScroll() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.classList.remove("hidden");
    } else {
      scrollToTopBtn.classList.add("hidden");
    }
  }
  
  // Funkcija koja se poziva kada se klikne na strelicu
  function scrollToTop() {
    document.body.scrollTop = 0; // Za Safari
    document.documentElement.scrollTop = 0; // Za Chrome, Firefox, IE i Opera
  }
  
  // Dodavanje event listenera za scroll
  window.onscroll = function() {
    checkScroll();
  };
  
  // Dodavanje event listenera za klik na strelicu
  document.getElementById("scrollToTop").addEventListener("click", scrollToTop);
  