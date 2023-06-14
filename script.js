const produtos = document.querySelector('.produtos');
const addProduto = document.querySelector('.add-produto');
const produtoLinha = document.querySelector('.produto-linha');
const linhaDinamica = document.querySelector('.linha-dinamica');

// Adiciona preços
var priceInput = document.getElementById('priceInput');

  priceInput.addEventListener('input', function (event) {
    var value = event.target.value.replace(',', '');
    var cents = value.slice(-2);
    var reais = value.slice(0, -2);

    event.target.value = cents ? reais + ',' + cents : '';
});