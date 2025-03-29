document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const subheader = document.querySelector('.subheader');
    const content = document.querySelector('.content');

    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            header.style.transform = 'translateY(-100px)';
            subheader.style.transform = 'translateY(-100px)';
            content.style.opacity = '1';
        } else {
            header.style.transform = 'translateY(0)';
            subheader.style.transform = 'translateY(0)';
            content.style.opacity = '0';
        }

        lastScrollTop = scrollTop;
    });
});
