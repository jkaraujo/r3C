const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a visão comum entre religiosos em relação aos transtornos mentais, comparada à visão científica?",
        alternativas: [
            {
                texto: "Transtornos mentais são vistos como fraqueza espiritual na religião e como doenças biológicas na ciência",
                afirmacao: "1-correto"
            },
            {
                texto: "Ambos veem os transtornos mentais como fraqueza de caráter",
                afirmacao: "1-errado"
            },
            {
                texto: "A religião e a ciência têm a mesma perspectiva sobre transtornos mentais",
                afirmacao: "1-errado"
            },
            {
                texto: "A religião não reconhece a existência de transtornos mentais",
                afirmacao: "1-errado"
            }
        ]
    },
    {
        enunciado: "Qual é um argumento comum utilizado por defensores da ciência ao criticar a abordagem religiosa para a saúde mental?",
        alternativas: [
            {
                texto: "A abordagem religiosa é sempre mais eficaz que a científica",
                afirmacao: "2-errado"
            },
            {
                texto: "A abordagem religiosa oferece soluções rápidas sem necessidade de medicação",
                afirmacao: "2-errado"
            },
             {
                texto: "A abordagem religiosa pode negligenciar tratamentos baseados em evidências científicas",
                afirmacao: "2-correto"
            },
            {
                texto: "A abordagem religiosa é aceita universalmente como a melhor prática",
                afirmacao: "2-errado"
            }
        ]
    },
    {
        enunciado: "Qual é um benefício reconhecido pela ciência ao inclir aspectos religiosos em terapias de saúde mental?",
        alternativas: [
            {
                texto: "Eliminação da necessidade de profissionais de saúde mental",
                afirmacao: "3-errado"
            },
            {
                texto: "Melhoramento das capacidades cognitivas dos pacientes",
                afirmacao: "3-errado"
            },
            {
                texto: "Substituição completa da terapia tradicional por práticas religiosas",
                afirmacao: "3-errado"
            },
            {
                texto: "Redução do estigma e aumento do suporte social para o paciente",
                afirmacao: "3-correto"
            }
        ]
    },
    {
        enunciado: "Como a religião e a ciência geralmente divergem em suas abordagens ao tratamento de problemas de saúde mental?",
        alternativas: [
            {
                texto: "A religião foca na oração e no aconselhamento espiritual enquanto a ciência usa terapia e medicação",
                afirmacao: "4-correto."
            },
            {
                texto: "Ambas concordam na utilização de medicação como principal forma de tratamento",
                afirmacao: "4-errado."
            },
             {
                texto: "A religião rejeita qualquer tratamento científico",
                afirmacao: "4-errado."
            },
            {
                texto: "A ciência incorpora práticas religiosas nos tratamentos",
                afirmacao: "4-errado."
            }
        ]
    },
    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Quantas você acertou?...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();