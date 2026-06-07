!console.log("ok")
const acoes = [
    { icone: "🚰", texto: "Reduza o tempo no banho e feche o registro enquanto se ensaboa." },
    { icone: "🚿", texto: "Mantenha a torneira fechada ao escovar os dentes ou ensaboar a louça." },
    { icone: "♻️", texto: "Reutilize a água do enxágue da máquina de lavar para limpar calçadas." },
    { icone: "🧹", texto: "Utilize a vassoura em vez da mangueira para varrer o quintal de casa." },
    { icone: "🪣", texto: "Adote o uso de baldes para lavar o carro, evitando o desperdício excessivo." },
    { icone: "📢", texto: "Monitore o hidrômetro e conserte vazamentos ocultos imediatamente." }
];

const container = document.querySelector('#container-acoes');

for (let i = 0; i < acoes.length; i++) {
    const item = acoes[i];
    const div = document.createElement('div');
    div.className = "acao-item";
    div.innerHTML = `
        <div class="emoji">${item.icone}</div>
        <p class="acao-texto">${item.texto}</p>
    `;
    container.appendChild(div);
}

const nav = document.querySelector('.menu-navegacao');

window.addEventListener('scroll', () => {
    if (window.scrollY > 15) {
        nav.style.opacity = '0.6'; 
    } else {       
        nav.style.opacity = '1';
    }
});

const form = document.getElementById("formulario-adesao");
const msg = document.getElementById("mensagem-retorno");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (form.checkValidity()) {
        const nome = document.getElementById("nome").value;
        msg.textContent = `Agradecemos seu apoio, ${nome}! Sua adesão foi salva com sucesso.`;
        msg.className = 'mensagem-retorno sucesso';
        form.reset();
    } else {
        msg.textContent = 'Atenção: Revise e preencha todos os campos do formulário.';
        msg.className = 'mensagem-retorno erro';
        msg.style.display = 'block';
    }    
});
