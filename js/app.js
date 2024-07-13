function comprar() {
  let campoQuantidade = document.getElementById('qtd')
  let tipoIngresso = document.getElementById('tipo-ingresso').value
  let quantidade = parseInt(campoQuantidade.value)

  atualizarQuantidadeDisponivel(tipoIngresso, quantidade)

  campoQuantidade.value = ''
}

function atualizarQuantidadeDisponivel(tipoIngresso, quantidade) {
  if(tipoIngresso === 'inferior') {
    let campoQuantidadeDisponivel = document.getElementById('qtd-inferior')
    atualizarCampoQuantidadeDisponivel(campoQuantidadeDisponivel, quantidade)
  }

  if(tipoIngresso === 'superior') {
    let campoQuantidadeDisponivel = document.getElementById('qtd-superior')
    atualizarCampoQuantidadeDisponivel(campoQuantidadeDisponivel, quantidade)
  }

  if(tipoIngresso === 'pista') {
    let campoQuantidadeDisponivel = document.getElementById('qtd-pista')
    atualizarCampoQuantidadeDisponivel(campoQuantidadeDisponivel, quantidade)
  }

  function atualizarCampoQuantidadeDisponivel(campoQuantidadeDisponivel, quantidade) {
    let quantidadeAtual = parseInt(campoQuantidadeDisponivel.textContent)

    if(quantidade > quantidadeAtual) {
      alert('Não é possível realizar a compra! Quantidade de ingressos indisponível para o tipo de ingresso selecionado.')
    } else {
      campoQuantidadeDisponivel.textContent = quantidadeAtual - quantidade
      alert('Compra realizada com sucesso!')
    }
  }
}
