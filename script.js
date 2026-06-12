const tempo = document.getElementById("tempo");

const dataInicio = new Date("2018-05-12T00:00:00");

function atualizarTempo() {

    const agora = new Date();
    const inicio = new Date("2018-05-12T00:00:00");

    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();

    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    if (dias < 0) {
        meses--;

        const ultimoMes = new Date(
            agora.getFullYear(),
            agora.getMonth(),
            0
        );

        dias += ultimoMes.getDate();
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    tempo.innerHTML = `
        ❤️ ${anos} anos<br>
        ❤️ ${meses} meses<br>
        ❤️ ${dias} dias<br>
        ❤️ ${horas} horas<br>
        ❤️ ${minutos} minutos<br>
        ❤️ ${segundos} segundos
    `;
}

atualizarTempo();
setInterval(atualizarTempo, 1000);

const botaoCarta = document.getElementById("mostrarCarta");
const carta = document.getElementById("carta");

botaoCarta.addEventListener("click", () => {

    if (carta.style.display === "block") {

        carta.style.display = "none";
        botaoCarta.innerText = "Abrir Carta ❤️";

    } else {

        carta.style.display = "block";
        botaoCarta.innerText = "Fechar Carta ❤️";

        carta.scrollIntoView({
            behavior: "smooth"
        });

    }

});

function criarCoracao() {

    const coracao = document.createElement("div");

    coracao.innerHTML = "❤️";

    coracao.style.position = "fixed";
    coracao.style.left = Math.random() * window.innerWidth + "px";
    coracao.style.bottom = "-20px";
    coracao.style.fontSize =
        (Math.random() * 20 + 15) + "px";

    coracao.style.pointerEvents = "none";
    coracao.style.zIndex = "999";
    coracao.style.opacity = "0.8";

    document.body.appendChild(coracao);

    let posicao = -20;
    let opacidade = 0.8;

    const animacao = setInterval(() => {

        posicao += 2;
        opacidade -= 0.004;

        coracao.style.bottom = posicao + "px";
        coracao.style.opacity = opacidade;

        if (opacidade <= 0) {
            clearInterval(animacao);
            coracao.remove();
        }

    }, 20);

}

setInterval(criarCoracao, 1200);

const elementos = document.querySelectorAll(
    ".item, .fotos img, .card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

elementos.forEach(elemento => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(40px)";
    elemento.style.transition = "all 1s ease";

    observer.observe(elemento);

});

const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-track img");

let index = 0;

function nextSlide(){

    index++;

    if(index >= slides.length){
        index = 0;
    }

    track.style.transform =
        `translateX(-${index * 100}%)`;
}

setInterval(nextSlide, 4000);

let startX = 0;
let endX = 0;

track.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

track.addEventListener("touchend", e => {

    endX = e.changedTouches[0].clientX;

    if(startX - endX > 50){

        index++;

        if(index >= slides.length){
            index = 0;
        }

    } else if(endX - startX > 50){

        index--;

        if(index < 0){
            index = slides.length - 1;
        }

    }

    track.style.transform =
        `translateX(-${index * 100}%)`;

});

const entrar = document.getElementById("entrar");
const conteudo = document.getElementById("conteudo");
const musica = document.getElementById("musica");

entrar.addEventListener("click", () => {
    musica.play();
    conteudo.style.display = "block";

    conteudo.scrollIntoView({
        behavior: "smooth"
    });

});
