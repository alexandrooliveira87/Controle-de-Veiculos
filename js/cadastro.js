document.addEventListener("DOMContentLoaded", function () {
    const formCadastro = document.getElementById("form-cadastro");
    const veiculoIndex = document.getElementById("veiculo-index");

    // Função para carregar os dados do veículo, se houver
    function carregarDados() {
        const urlParams = new URLSearchParams(window.location.search);
        const index = urlParams.get("index");

        if (index !== null) {
            veiculoIndex.value = index;
            const veiculos = JSON.parse(localStorage.getItem("veiculos")) || [];
            const veiculo = veiculos[index];

            if (veiculo) {
                document.getElementById("modelo").value = veiculo.modelo;
                document.getElementById("grupo").value = veiculo.grupo;
                document.getElementById("marca").value = veiculo.marca;
                document.getElementById("ano").value = veiculo.ano;
                document.getElementById("placa").value = veiculo.placa;
                document.getElementById("cor").value = veiculo.cor;
                document.getElementById("descricao").value = veiculo.descricao;
                document.getElementById("foto").value = veiculo.foto;
            }
        }
    }

    // Função para salvar ou atualizar o veículo
    function salvarVeiculo(e) {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        const index = veiculoIndex.value;
        const veiculos = JSON.parse(localStorage.getItem("veiculos")) || [];
        const novoVeiculo = {
            modelo: document.getElementById("modelo").value,
            grupo: document.getElementById("grupo").value,
            marca: document.getElementById("marca").value,
            ano: document.getElementById("ano").value,
            placa: document.getElementById("placa").value,
            cor: document.getElementById("cor").value,
            descricao: document.getElementById("descricao").value,
            foto: document.getElementById("foto").value
        };

        if (index === "") {
            // Adiciona um novo veículo
            veiculos.push(novoVeiculo);
        } else {
            // Atualiza o veículo existente
            veiculos[index] = novoVeiculo;
        }

        localStorage.setItem("veiculos", JSON.stringify(veiculos));
        window.location.href = "listarCadastro.html"; // Redireciona para a lista após salvar
    }

    formCadastro.addEventListener("submit", salvarVeiculo);

    carregarDados();
});
