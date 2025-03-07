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

function toggleMenu() {
    const menu = document.querySelector(".navbar-menu");
    const icon = document.querySelector(".menu-toggle i");

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-times");
    } else {
        icon.classList.replace("fa-times", "fa-bars");
    }
}

