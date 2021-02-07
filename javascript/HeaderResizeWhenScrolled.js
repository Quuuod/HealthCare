window.onscroll = function () {
    var top = window.scrollY;
    var offset = 60;

    var header = document.getElementsByClassName('header');
    var links = document.getElementsByClassName('menu__list');
    var line = document.getElementsByClassName('menu__line');
    
    if (top > offset) {
        header[0].classList.remove('top');
        header[0].classList.add('scrolled');

        links[0].classList.remove('links-top');
        links[0].classList.add('links-scrolled');

        line[0].classList.remove('line-top');
        line[0].classList.add('line-scrolled');
    } else {
        header[0].classList.remove('scrolled');
        header[0].classList.add('top');

        links[0].classList.remove('links-scrolled');
        links[0].classList.add('links-top');

        line[0].classList.remove('line-scrolled');
        line[0].classList.add('line-top');
    }
};