document.addEventListener("DOMContentLoaded", function () {
    const cardsContainer = document.querySelector("#cards-container");

    // Função para carregar os veículos do localStorage
    function carregarVeiculos() {
        const veiculos = JSON.parse(localStorage.getItem("veiculos")) || [];
        cardsContainer.innerHTML = "";

        veiculos.forEach((veiculo) => {
            const card = document.createElement("div");
            card.className = "card";

            // Ajuste do caminho da imagem e tratamento para imagem padrão
            const fotoSrc = veiculo.foto ? veiculo.foto : 'imagens/imagem-padrao.jpg';

            card.innerHTML = `
                <img src="${fotoSrc}" alt="Foto">
                <h3>${veiculo.modelo}</h3>
                <p>Ano: ${veiculo.ano}</p>
            `;

            cardsContainer.appendChild(card);
        });
    }

    carregarVeiculos();
});


document.getElementById('menu-toggle').addEventListener('click', function() {
    document.querySelector('.container').classList.toggle('menu-active');
});