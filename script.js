// Aguarda o documento carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    const botaoConhecer = document.getElementById("btn-conhecer");
    const secaoProdutos = document.getElementById("produtos");
    const cards = document.querySelectorAll(".card-produto");

    // 1. Função para rolar a página até os produtos ao clicar no botão
    botaoConhecer.addEventListener("click", () => {
        secaoProdutos.scrollIntoView({ behavior: "smooth" });
    });

    // 2. Interatividade nos Cards (Efeito de clique/alerta interativo)
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            const tecnologia = card.querySelector("h3").innerText;
            alert(`Você clicou para saber mais sobre: ${tecnologia}! Em breve teremos mais detalhes técnicos.`);
        });
        
        // Mudar o ponteiro do mouse para indicar que é clicável
        card.style.cursor = "pointer";
    });
});
