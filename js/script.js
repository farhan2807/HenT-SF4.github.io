$(".nav-link").on("click", function (e) {
  e.preventDefault();

  var tujuan = $(this).attr("href");
  var elementujuan = $(tujuan);

  var tinggiNavbar = $(".navbar").outerHeight();

  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: elementujuan.offset().top - 50,
      },
      100,
    );
});

// bikin halaman ga kegantung
// about
$(window).on('load', function(){
  $('.pkiri').addClass('pmuncul');  //kalau kelas terakhir gaperlu titik
  $('.pkanan').addClass('pmuncul');  //kalau kelas terakhir gaperlu titik
});

// parallax
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  // console.log(wScroll);
  // py-5 atau jumbotron atau header
  $(".py-5 img").css({
    transform: "translate(0px, " + wScroll / 3 + "%)",
  });

  $(".py-5 h1").css({
    transform: "translate(0px, " + wScroll / 1.5 + "%)",
  });

  $(".py-5 p").css({
    transform: "translate(0px, " + wScroll / 0.9 + "%)",
  });

  // portofolio
  if (wScroll > $('.portofolio').offset().top - 250) {
  $('.portofolio .thumbnail').each(function(i) {
    setTimeout(function() {
      $('.portofolio .thumbnail') .eq(i).addClass('muncul');
    }, 300 * i + 1);
  });
} 
});


