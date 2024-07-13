function comprar() {
  let campoQuantidade = document.getElementById('qtd')
  let tipoIngresso = document.getElementById('tipo-ingresso').value
  let quantidade = parseInt(campoQuantidade.value)

  if (isNaN(quantidade) || quantidade <= 0) {
    alert('Por favor, insira uma quantidade válida.');
    return;
}

  validarEAtualizarQuantidadeDisponivel(tipoIngresso, quantidade)

  campoQuantidade.value = ''
}

function validarEAtualizarQuantidadeDisponivel(tipoIngresso, quantidade) {
  if(tipoIngresso === 'inferior') {
    let campoQuantidadeDisponivel = document.getElementById('qtd-inferior')
    atualizarQuantidadeDisponivel(campoQuantidadeDisponivel, quantidade)
  }

  if(tipoIngresso === 'superior') {
    let campoQuantidadeDisponivel = document.getElementById('qtd-superior')
    atualizarQuantidadeDisponivel(campoQuantidadeDisponivel, quantidade)
  }

  if(tipoIngresso === 'pista') {
    let campoQuantidadeDisponivel = document.getElementById('qtd-pista')
    atualizarQuantidadeDisponivel(campoQuantidadeDisponivel, quantidade)
  }

  function atualizarQuantidadeDisponivel(campoQuantidadeDisponivel, quantidade) {
    let quantidadeAtual = parseInt(campoQuantidadeDisponivel.textContent)

    if(quantidade > quantidadeAtual) {
      alert('Não é possível realizar a compra! Quantidade de ingressos indisponível para o tipo de ingresso selecionado.')
    } else {
      campoQuantidadeDisponivel.textContent = quantidadeAtual - quantidade
      alert('Compra realizada com sucesso!')
    }
  }
}
