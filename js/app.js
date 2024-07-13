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
    let quantidadeAtual = parseInt(campoQuantidadeDisponivel.textContent)
    campoQuantidadeDisponivel.textContent = quantidadeAtual - quantidade
  }

  if(tipoIngresso === 'superior') {
    let campoQuantidadeSuperior = document.getElementById('qtd-superior')
    let quantidadeAtual = parseInt(campoQuantidadeSuperior.textContent)
    campoQuantidadeSuperior.textContent = quantidadeAtual - quantidade
  }

  if(tipoIngresso === 'pista') {
    let campoQuantidadeSuperior = document.getElementById('qtd-pista')
    let quantidadeAtual = parseInt(campoQuantidadeSuperior.textContent)
    campoQuantidadeSuperior.textContent = quantidadeAtual - quantidade
  }
}
