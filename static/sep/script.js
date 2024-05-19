function scrollToTop() {
    document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollToTop = document.querySelector('.fixed-button');
    const heroSection = document.getElementById('hero');
    const heroSectionHeight = heroSection.offsetHeight;
    const secondSection = document.getElementById('features'); // замените 'features' на id второго блока
    const secondSectionHeight = secondSection.offsetHeight;

    // Определяем, насколько пользователь прокрутил страницу
    const scrollProgress = Math.min(window.scrollY / secondSectionHeight, 1);

    // Устанавливаем прозрачность фона navbar
    const maxOpacity = 0.95; // Максимальная непрозрачность
    const backgroundColor = `rgba(0, 0, 0, ${scrollProgress * maxOpacity})`;
    navbar.style.backgroundColor = backgroundColor;

    // Изменяем фон navbar по мере прокрутки
    if (window.scrollY > heroSectionHeight) {
        navbar.classList.add('scrolled');
        scrollToTop.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
        scrollToTop.classList.remove('scrolled');
    }
});

// Ваша функция переключения языка
function switchLanguage(languageCode) {
    // Загрузка файла локализации
    fetch('https://sep.fdu.su/site_localization')
        .then(response => response.json())
        .then(data => {
            // Получаем тексты для выбранного языка
            const texts = data[languageCode];
            
            // Обновляем тексты на странице
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (texts[key]) {
                    element.textContent = texts[key];
                }
            });
        })
        .catch(error => console.error('Error loading localization file:', error));
}


// Обработчики событий для кнопок переключения языка
document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
document.getElementById('lang-ru').addEventListener('click', () => switchLanguage('ru'));
document.getElementById('lang-uk').addEventListener('click', () => switchLanguage('uk'));
document.getElementById('lang-mob-en').addEventListener('click', () => switchLanguage('en'));
document.getElementById('lang-mob-ru').addEventListener('click', () => switchLanguage('ru'));
document.getElementById('lang-mob-uk').addEventListener('click', () => switchLanguage('uk'));

// По умолчанию загружаем английский язык
switchLanguage('en');


// Получаем все якорные ссылки, начинающиеся с #
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Предотвращаем стандартное поведение ссылки

        // Получаем целевой элемент, к которому необходимо прокрутить
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth' // Используем плавную прокрутку
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
});
