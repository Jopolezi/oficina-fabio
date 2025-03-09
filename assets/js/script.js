document.getElementById('enviar').addEventListener('click', function() {
    const nome = document.getElementById('nome');
    const servico = document.getElementById('servico');

    // Remover classes de erro anteriores
    nome.classList.remove('input-error');
    servico.classList.remove('input-error');

    // Verificar se os campos estão preenchidos
    let valid = true;
    if (!nome.value.trim()) {
        nome.classList.add('input-error');
        valid = false;
    }
    if (!servico.value) {
        servico.classList.add('input-error');
        valid = false;
    }

    if (!valid) {
        return; 
    }

    nome.offsetWidth;
    servico.offsetWidth

    const texto = `Olá, meu nome é ${nome.value.trim()}. Gostaria de solicitar o serviço de ${servico.value}.`;

    const url = `https://wa.me/5516997765591?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
});

document.getElementById('nome').addEventListener('input', function() {
    this.classList.remove('input-error');
    this.classList.add('input-verified');
});

document.getElementById('servico').addEventListener('change', function() {
    this.classList.add('input-verified');
});

document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    const btnVoltar = document.querySelector("#botao-voltar");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                btnVoltar.classList.add("visivel");
            } else {
                btnVoltar.classList.remove("visivel");
            }
        });
    }, { threshold: 0 });

    observer.observe(main);
});

document.addEventListener("DOMContentLoaded", function () {
    const menuHamburguer = document.getElementById("menuHamburguer");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeMenu = document.getElementById("closeMenu");
    const menuLinks = document.querySelectorAll(".menu-link");

    function toggleMenu() {
        mobileMenu.classList.toggle("active");
    }

    menuHamburguer.addEventListener("click", toggleMenu);
    closeMenu.addEventListener("click", toggleMenu);

    document.addEventListener("click", function (event) {
        if (!mobileMenu.contains(event.target) && !menuHamburguer.contains(event.target)) {
            mobileMenu.classList.remove("active");
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", toggleMenu);
    });
});

