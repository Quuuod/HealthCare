window.onscroll = function () {
    var top = window.scrollY;
    var offset = 60;

    var header = document.getElementsByClassName('header');
    var links = document.getElementsByClassName('menu__list');
    var drop = document.getElementsByClassName('dropdown-content');
    var autho = document.getElementsByClassName('authorize');

    if (top > offset) {
        header[0].classList.remove('top');
        header[0].classList.add('scrolled');

        links[1].classList.remove('links-top');
        links[1].classList.add('links-scrolled');

        autho[0].classList.remove('authorizration-top');
        autho[0].classList.add('authorizration-scrolled');

        drop[0].classList.remove('drop-top');
        drop[0].classList.add('drop-scrolled');
        
    } else {
        header[0].classList.remove('scrolled');
        header[0].classList.add('top');

        links[1].classList.remove('links-scrolled');
        links[1].classList.add('links-top');

        autho[0].classList.remove('authorizration-scrolled');
        autho[0].classList.add('authorizration-top');

        drop[0].classList.add('drop-top');
        drop[0].classList.remove('drop-scrolled');
    }
};