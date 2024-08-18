document.addEventListener("DOMContentLoaded", function () {
    const tabelaVeiculos = document.querySelector("#tabela-veiculos tbody");

    // Função para carregar os veículos do localStorage
    function carregarVeiculos() {
        const veiculos = JSON.parse(localStorage.getItem("veiculos")) || [];
        tabelaVeiculos.innerHTML = "";

        veiculos.forEach((veiculo, index) => {
            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${veiculo.modelo}</td>
                <td>${veiculo.grupo}</td>
                <td>${veiculo.marca}</td>
                <td>${veiculo.ano}</td>
                <td>${veiculo.placa}</td>
                <td>${veiculo.cor}</td>
                <td>${veiculo.descricao}</td>
                <td>
                    <button class="btn-editar" data-index="${index}">Editar</button>
                    <button class="btn-excluir" data-index="${index}">Excluir</button>
                </td>
            `;

            tabelaVeiculos.appendChild(tr);
        });
    }

    // Função para excluir um veículo
    function excluirVeiculo(index) {
        const veiculos = JSON.parse(localStorage.getItem("veiculos")) || [];
        veiculos.splice(index, 1);
        localStorage.setItem("veiculos", JSON.stringify(veiculos));
        carregarVeiculos();
    }

    // Event listener para excluir veículo
    tabelaVeiculos.addEventListener("click", function (e) {
        if (e.target.classList.contains("btn-excluir")) {
            const index = e.target.getAttribute("data-index");
            excluirVeiculo(index);
        }

        if (e.target.classList.contains("btn-editar")) {
            const index = e.target.getAttribute("data-index");
            window.location.href = `editar.html?index=${index}`;
        }
    });

    carregarVeiculos();
});
