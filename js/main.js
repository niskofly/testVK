$(function () {


    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body; // Ссылка на элемент body

    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');

        // Фиксируем body, если меню открыто, иначе освобождаем прокрутку
        if (mobileMenu.classList.contains('active')) {
            body.classList.add('body-fixed');
        } else {
            body.classList.remove('body-fixed');
        }
    });


})