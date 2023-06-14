const produtos = document.querySelector('.produtos');
const produtoLinha = document.querySelector('.produto-linha');
const linhaDinamica = document.querySelector('.linha-dinamica');

const addProduto = document.querySelector('.add-produto');
const removeProduto = document.querySelector('.remove-produto');

// Adiciona preços
var priceInput = document.getElementById('priceInput');

  priceInput.addEventListener('input', function (event) {
    var value = event.target.value.replace(',', '');
    var cents = value.slice(-2);
    var reais = value.slice(0, -2);

    event.target.value = cents ? reais + ',' + cents : '';
});

// Adiciona e remove produtos
addProduto.addEventListener('click', () => {
    alert('Adicionou');
})

removeProduto.addEventListener('click', () => {
    alert('Removeu');
})



