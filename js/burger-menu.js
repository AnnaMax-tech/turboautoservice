console.log("burger-menu.js is loaded")

document.addEventListener('DOMContentLoaded', () => {
    // Получаем необходимые элементы
    const burgerIcon = document.querySelector('.burger-icon');
    const burgerNav = document.getElementById('burgerNav');
    const burgerLinks = document.querySelectorAll('.burger-nav .header_nav_link');

    // Функция для переключения меню
    function toggleMenu() {
        burgerIcon.classList.toggle('active');
        burgerNav.classList.toggle('active');
        // Добавляем/убираем класс для запрета прокрутки body
        document.body.classList.toggle('no-scroll');
    }

    // Функция для закрытия меню
    function closeMenu() {
        burgerIcon.classList.remove('active');
        burgerNav.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }

    // Убираем onclick из HTML и добавляем обработчик здесь
    burgerIcon.removeAttribute('onclick');
    burgerIcon.addEventListener('click', toggleMenu);

    // Добавляем обработчики для всех ссылок в меню
    burgerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Получаем id секции из href
            const sectionId = link.getAttribute('href');
            
            // Находим элемент секции
            const section = document.querySelector(sectionId);
            
            // Закрываем меню
            closeMenu();
            
            // Плавно скроллим к секции
            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', (e) => {
        if (!burgerNav.contains(e.target) && !burgerIcon.contains(e.target)) {
            closeMenu();
        }
    });

    // Закрытие меню при нажатии Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
});