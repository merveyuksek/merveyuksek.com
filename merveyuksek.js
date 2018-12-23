
$(document).ready(function() {
    $(".navigation-menu").hide();

  $(".hamburger").click(function() {
    $(".navigation-menu").slideToggle("slow", function() {});
    $(".hamburger").hide();
    $(".hero-text-container").css({ top: '60%' });
  });

  $("#cross-button").click(function() {
    $(".navigation-menu").slideToggle("slow", function() {
      $(".navigation-menu").hide();
      $(".hamburger").show();
        $(".hero-text-container").css({ top: '50%' });
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


