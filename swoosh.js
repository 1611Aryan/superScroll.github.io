const width = window.innerWidth;
window.addEventListener('scroll', function () {
    let pos;
    document.getElementById('horizontal1').style.clipPath = "circle(0px at 25% center)";
    document.getElementById('horizontal2').style.clipPath = "circle(0px at 25% center)";
    document.getElementById('horizontal3').style.clipPath = "circle(0px at 25% center)";

    if (scrollX <= 1.5 * window.innerWidth) {
        pos = (width / 1.35 - (window.scrollX) * 1 / 1.8);
        if (pos < 40) {
            pos = 40;
        }
        document.getElementById('horizontal').style.clipPath = "circle(" + pos + "px at 25% center)";
        document.getElementById('horizontal1').style.clipPath = "circle(0px at 25% center)";
        document.querySelector('body').style.overflowY = 'hidden';
    }
    else if (scrollX > 1.5 * window.innerWidth && scrollX <= 3 * window.innerWidth) {
        pos = (2 * (window.scrollX) * 1 / 3.6 - width / 1.1);
        if (pos < 40) {
            pos = 40;
        }
        document.getElementById('horizontal').style.clipPath = "circle(40px at 25% center)";
        document.getElementById('horizontal1').style.clipPath = "circle(" + pos + "px at 16.5% center)";
        document.getElementById('horizontal1').style.backgroundColor = 'white';
        document.querySelector('body').style.overflowY = 'hidden';
        $('#horizontal1').show();
    }
    if (scrollX > 3 * window.innerWidth && scrollX < 6 * window.innerWidth) {
        pos = (width / 1 - Math.exp(Math.pow(window.scrollX, 1 / 4.50)));
        if (pos < 40) {
            pos = 40;
        }
        document.getElementById('horizontal2').style.clipPath = "circle(" + pos + "px at 16.5% center)";
        document.getElementById('horizontal2').style.backgroundColor = 'white';
        document.getElementById('horizontal3').style.clipPath = "circle(0px at 25% center)";
        document.querySelector('body').style.overflowY = 'hidden';
        $('#horizontal2').show();
    }
    if (scrollX > 5.5 * window.innerWidth) {
        pos = (2 * (window.scrollX) * 1 / 3.3 - width * 4 / 1.1);
        if (pos < 40) {
            pos = 40;
        }
        document.getElementById('horizontal2').style.clipPath = "circle(40px at 25% center)";
        document.getElementById('horizontal3').style.clipPath = "circle(" + pos + "px at 16.5% center)";
        document.getElementById('horizontal3').style.backgroundColor = 'white';
        document.querySelector('body').style.overflowY = 'hidden';
        $('#horizontal3').show();
    }
    //console.log(scrollX);
});
