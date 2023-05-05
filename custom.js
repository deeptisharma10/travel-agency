$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 60) {
        $('header').addClass("active");
    } else {
        $('header').removeClass("active");
    }
});
// var val = document.getElementById("val");
// var input = document.querySelectorAll("input")[];
// val.innerHTML = input.value;
// input.addEventListener("input", function () {
// 	val.innerHTML = input.value;
// });
