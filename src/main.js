// Aguarda o carregamento completo da página antes de executar
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões que controlam as abas
    const buttons = document.querySelectorAll('[data-tab-button]');

    // Adiciona evento de clique em cada botão
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            // Obtém o ID da aba que deve ser mostrada (do atributo data-tab-button)
            const abaAlvo = botao.target.dataset.tabButton;
            
            // Seleciona a aba correspondente ao botão clicado
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            
            // 1. Esconde todas as abas visíveis
            escondeTodasAbas();
            
            // 2. Mostra a aba selecionada
            aba.classList.add('shows__list--is--active');
            
            // 3. Remove destaque de todos os botões
            removeBotaoAtivo();
            
            // 4. Destaca o botão clicado
            botao.target.classList.add('shows__tabs__button--is--active');
        })
    }
})

// Remove a classe ativa de todos os botões
function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is--active');
    }
}

// Esconde todas as abas de conteúdo
function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is--active');
    }
}