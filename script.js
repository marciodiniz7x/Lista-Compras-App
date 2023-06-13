const produtos = document.querySelector('.produtos');
const addProduto = document.querySelector('.add-produto');
const produtoLinha = document.querySelector('.produto-linha');

const addLinha = () => {
    
    produtos.appendChild(produtoLinha);
    alert('adicionou');

}

addProduto.addEventListener('click', addLinha);