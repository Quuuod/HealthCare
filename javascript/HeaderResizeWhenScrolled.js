window.onscroll = function () {
    var top = window.scrollY;
    var btn = document.getElementsByClassName('dropbtn');
    var header = document.getElementsByTagName('header');
    var dropdowncontent = document.getElementsByClassName('dropdown-content');
    var offset = 60;
    if (top > offset) {
        header[0].classList.remove('top');
        header[0].classList.add('scrolled');
        btn[0].classList.remove('top');
        btn[0].classList.add('scrolled');
        dropdowncontent[0].classList.remove('top');
        dropdowncontent[0].classList.add('scrolled');
    } else {
        header[0].classList.remove('scrolled');
        header[0].classList.add('top');
        btn[0].classList.remove('scrolled');
        btn[0].classList.add('top');
        dropdowncontent[0].classList.remove('scrolled');
        dropdowncontent[0].classList.add('top');
    }
};