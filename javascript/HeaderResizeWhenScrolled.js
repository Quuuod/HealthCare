window.onscroll = function () {
    var top = window.scrollY;
    var header = document.getElementsByClassName('header');
    var offset = 60;
    if (top > offset) {
        header[0].classList.remove('top');
        header[0].classList.add('scrolled');
    } else {
        header[0].classList.remove('scrolled');
        header[0].classList.add('top');
    }
};