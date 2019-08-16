let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-nav');

console.log(mainNav);
console.log(navBarToggle);


mainNav.addEventListener('click', function () {
    console.log(navBarToggle.classList);
    navBarToggle.classList.toggle('nav--is-hidden');
});