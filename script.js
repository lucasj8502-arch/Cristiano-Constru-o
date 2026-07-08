// =========================
// Navbar muda ao rolar
// =========================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("ativo");
    } else {
        header.classList.remove("ativo");
    }
});

// =========================
// Contadores animados
// =========================

const counters = document.querySelectorAll(".contador");

const iniciarContadores = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let current = 0;

        const increment = target / 120;

        const update = () => {

            if (current < target) {

                current += increment;

                counter.innerText = Math.ceil(current);

                requestAnimationFrame(update);

            } else {

                if(target === 20){

                    counter.innerText = "20+";

                }else if(target === 350){

                    counter.innerText = "350+";

                }else{

                    counter.innerText = "100%";

                }

            }

        };

        update();

    });

};

const numeros = document.querySelector(".numeros");

const observer = new IntersectionObserver((entries)=>{

    if(entries[0].isIntersecting){

        iniciarContadores();

        observer.disconnect();

    }

});

observer.observe(numeros);

// =========================
// Scroll Reveal
// =========================

const reveals = document.querySelectorAll(
".sobre, .card, .galeria img, .contato"
);

function reveal(){

    const altura = window.innerHeight;

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < altura - 100){

            item.style.opacity="1";
            item.style.transform="translateY(0px)";

        }

    });

}

reveals.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(70px)";
    item.style.transition="all .8s ease";

});

window.addEventListener("scroll", reveal);

reveal();

// =========================
// Lightbox da Galeria
// =========================

const imagens = document.querySelectorAll(".grid img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.style.position = "fixed";
lightbox.style.top = "0";
lightbox.style.left = "0";
lightbox.style.width = "100%";
lightbox.style.height = "100%";
lightbox.style.background = "rgba(0,0,0,.92)";
lightbox.style.display = "none";
lightbox.style.alignItems = "center";
lightbox.style.justifyContent = "center";
lightbox.style.zIndex = "9999";
lightbox.style.cursor = "zoom-out";

const imagem = document.createElement("img");

imagem.style.maxWidth = "90%";
imagem.style.maxHeight = "90%";
imagem.style.borderRadius = "15px";
imagem.style.boxShadow = "0 20px 60px rgba(0,0,0,.5)";

lightbox.appendChild(imagem);

document.body.appendChild(lightbox);

imagens.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.style.display="flex";

        imagem.src = img.src;

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.style.display="none";

});

// =========================
// Formulário -> WhatsApp
// =========================

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const nome = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const telefone = form.querySelector('input[type="tel"]').value;
    const cidade = form.querySelectorAll("input")[3].value;
    const tipo = form.querySelector("select").value;
    const mensagem = form.querySelector("textarea").value;

    const texto =
`Olá! Gostaria de solicitar um orçamento.

Nome: ${nome}

Telefone: ${telefone}

Email: ${email}

Cidade: ${cidade}

Tipo da obra: ${tipo}

Descrição:
${mensagem}`;

    const url =
`https://wa.me/5521966139280?text=${encodeURIComponent(texto)}`;

    window.open(url,"_blank");

});

// =========================
// Botão WhatsApp pulsando
// =========================

const botao = document.querySelector(".whatsapp");

setInterval(()=>{

    botao.animate([
        {transform:"scale(1)"},
        {transform:"scale(1.12)"},
        {transform:"scale(1)"}
    ],{

        duration:900

    });

},3000);
