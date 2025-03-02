document.addEventListener("DOMContentLoaded", function (event) {
    event.ppreventDefault();    

    let nome = document.querySelector(".form-nome").value;
    const problema = document.querySelector(".form-problema").value;
    let mensagem = document.querySelector(".form-mensagem").value;

    let numeroWhatsApp = "5516997126943";
    let mensagemWhatsApp = `Olá, meu nome é ${nome} e estou com o seguinte problema: ${problema}. ${mensagem}`;

    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagemWhatsApp}`, "_blank");


});

document.getElementById("telefone").addEventListener("input", function (e) {
    let numero = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número

    // Aplica a formatação (XX) XXXXX-XXXX
    if (numero.length > 10) {
        numero = numero.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (numero.length > 6) {
        numero = numero.replace(/^(\d{2})(\d{4})/, "($1) $2-");
    } else if (numero.length > 2) {
        numero = numero.replace(/^(\d{2})/, "($1) ");
    }

    e.target.value = numero;
});


