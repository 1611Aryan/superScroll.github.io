$(document).ready(function () {
    $('html, body, *').mousewheel(function (e, delta) {
        this.scrollLeft -= (delta * 70);
        //e.preventDefault();
    });
    if (window.scrollX == 0) {
        $('.left').css("display", "none");
    }
    if (window.scrollX > 0) {
        $('.left').css("display", "inline-block");
        $('.left').click(function () {
            window.scrollTo(0, 0);
        });
    }
    if (window.scrollX == widthX) {
        $('.right').css("display", "none");
    }
    if (window.scrollX < widthX) {
        $('.right').css("display", "inline-block");
        $('.right').click(function () {
            window.scrollTo(widthX, 0);
        });
    }
});
const widthMultiplier = 8;
const widthX = window.innerWidth * widthMultiplier;
window.addEventListener('scroll', () => {
    if (window.scrollX == 0) {
        $('.left').css("display", "none");
    }
    if (window.scrollX > 0) {
        $('.left').css("display", "inline-block");
        $('.left').click(function () {
            window.scrollTo(0, 0);
        });
    }
    if (window.scrollX == widthX) {
        $('.right').css("display", "none");
    }
    if (window.scrollX < widthX) {
        $('.right').css("display", "inline-block");
        $('.right').click(function () {
            window.scrollTo(widthX, 0);
        });
    }
});

