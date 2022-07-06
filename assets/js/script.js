$(document).ready(function () {
  setTimeout(() => {
    if ($("#loader").length > 0) {
      $("body").removeClass("no-overflow");
      $("#loader").fadeOut();
    }
  }, 1000);

  // window.addEventListener("load", function () {
  //   AOS.init({
  //     duration: 1500,
  //   });
  // });

  // if ($(".slider").length > 0) {
  //   $(".slider").slick({
  //     centerMode: true,
  //     centerPadding: "0px",
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     focusOnSelect: true,
  //     prevArrow: $("#slickPrev"),
  //     nextArrow: $("#slickNext"),
  //   });
  // }
});

// scroll to top button

//Get the button:
scrollToTopBtn = document.getElementById("scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  if (scrollToTopBtn) {
    scrollFunction();
  }
};

function scrollFunction() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" }); // For Chrome, Firefox, IE and Opera
  document.body.scrollTop = 0; // For Safari
}

$(window).scroll(function () {
  if (
    document.body.scrollTop > 650 ||
    document.documentElement.scrollTop > 650
  ) {
    $(".navbar").addClass("no-trans");
  } else {
    $(".navbar").removeClass("no-trans");
  }
});
