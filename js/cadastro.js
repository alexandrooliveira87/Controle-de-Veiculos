// Função para salvar os dados do formulário no localStorage
function salvarCadastro(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Captura os dados do formulário
    const modelo = document.getElementById('modelo').value;
    const grupo = document.getElementById('grupo').value;
    const marca = document.getElementById('marca').value;
    const ano = document.getElementById('ano').value;
    const placa = document.getElementById('placa').value;
    const cor = document.getElementById('cor').value;
    const descricao = document.getElementById('descricao').value;
    const foto = document.getElementById('foto').files[0]; // Captura o arquivo da foto

    // Cria um objeto com os dados
    const veiculo = {
        modelo,
        grupo,
        marca,
        ano,
        placa,
        cor,
        descricao,
        foto: foto ? foto.name : null // Armazena apenas o nome do arquivo
    };

    // Recupera os dados existentes no localStorage
    const veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];

    // Adiciona o novo veículo aos dados existentes
    veiculos.push(veiculo);

    // Salva os dados atualizados no localStorage
    localStorage.setItem('veiculos', JSON.stringify(veiculos));

    // Limpa o formulário
    document.getElementById('form-cadastro').reset();

    // Exibe uma mensagem de sucesso (opcional)
    alert('Veículo cadastrado com sucesso!');
}

// Adiciona um event listener ao formulário
document.getElementById('form-cadastro').addEventListener('submit', salvarCadastro);
