
$(document).ready(function() {
    $(".navigation-menu").hide();

  $(".hamburger").click(function() {
    $(".navigation-menu").slideToggle("slow", function() {});
    $(".hamburger").hide();
  });

  $("#cross-button").click(function() {
    $(".navigation-menu").slideToggle("slow", function() {
      $(".navigation-menu").hide();
      $(".hamburger").show();
    });
  });

  //   SMOOTH SCROLL
  $(".smooth-scroll").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});


