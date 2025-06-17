// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', function() {
    // 1. SELEÇÃO DE ELEMENTOS - Obtém referências para componentes chave
    const buttons = document.querySelectorAll('[data-tab-button]'); // Botões de controle das abas
    const questions = document.querySelectorAll('[data-faq-question]'); // Perguntas do FAQ
    const heroSection = document.querySelector('.hero'); // Seção hero para cálculo de altura
    const alturaHero = heroSection.clientHeight; // Altura total da seção hero

    // 2. CONTROLE DE SCROLL - Gerencia comportamento do header durante rolagem
    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY; // Posição vertical atual da janela
        
        // Lógica de exibição/ocultação do header baseada na posição do scroll
        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader(); // Oculta elementos quando no topo da página
        } else {
            exibeElementosDoHeader(); // Exibe elementos ao descer a página
        } 
    })

    // 3. CONTROLE DE ABAS - Configura eventos para botões de navegação entre abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            // Identifica qual aba deve ser mostrada através do atributo data
            const abaAlvo = botao.target.dataset.tabButton;
            
            // Seleciona o container de conteúdo correspondente
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            
            // Fluxo de controle de abas:
            escondeTodasAbas(); // 3.1 - Oculta todas as abas visíveis
            aba.classList.add('shows__list--is--active'); // 3.2 - Exibe aba selecionada
            removeBotaoAtivo(); // 3.3 - Remove destaque de todos os botões
            botao.target.classList.add('shows__tabs__button--is--active'); // 3.4 - Destaca botão clicado
        })
    }

    // 4. CONTROLE DO FAQ - Configura eventos para perguntas frequentes
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

/**
 * GERENCIAMENTO DO FAQ
 * Alterna a exibição de respostas quando uma pergunta é clicada.
 * @param {Event} elemento - Evento de clique disparado na pergunta
 */
function abreOuFechaResposta(elemento) {
    const classeAberta = 'faq__questions__item--is-open'; // Classe CSS que controla estado aberto
    const elementoPai = elemento.target.parentNode; // Acessa o container da pergunta

    // Alterna o estado visual (aberto/fechado) no elemento pai
    elementoPai.classList.toggle(classeAberta);
}

/**
 * GERENCIAMENTO DE ABAS
 * Remove a classe ativa de todos os botões de controle de abas
 */
function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is--active');
    }
}

/**
 * GERENCIAMENTO DE ABAS
 * Oculta todas as abas de conteúdo removendo a classe de ativação
 */
function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is--active');
    }
}

/**
 * CONTROLE DE HEADER
 * Oculta elementos específicos do header aplicando classe modificadora
 */
function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden'); // Aplica classe que esconde elementos
}

/**
 * CONTROLE DE HEADER
 * Exibe elementos do header removendo classe modificadora
 */
function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden'); // Remove classe de ocultação
}