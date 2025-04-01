const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    modeToggle.textContent = 'Modo Claro🌞'; 
}
modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        modeToggle.textContent = 'Modo Claro';
    } else {
        localStorage.setItem('dark-mode', 'disabled');
        modeToggle.textContent = 'Modo Escuro';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 1.0) {
                section.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
