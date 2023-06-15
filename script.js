const produtos = document.querySelector('.produtos');
const produtoLinha = document.querySelector('.produto-linha');
const botoes = document.querySelector('.botoes')
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

// Defina a quantidade desejada de cópias
var quantidadeCopias = 1;

addProduto.addEventListener('click', () => {
    
    console.log(quantidadeCopias);

    // Selecione o elemento pai onde deseja adicionar as cópias das divs
    const parentElement = document.querySelector('.table');

    // Loop para criar as cópias das divs
    for (let i = 0; i < quantidadeCopias; i++) {
        
        // Criar o elemento <tr>
        const tr = document.createElement('tr');

        // Criar o elemento <td> para o input do nome
        const tdName = document.createElement('td');
        const inputName = document.createElement('input');
        inputName.setAttribute('type', 'text');
        inputName.setAttribute('name', 'text');
        inputName.classList.add('input-produto');
        inputName.setAttribute('placeholder', 'Digite o nome...');
        inputName.setAttribute('maxlength', '18');
        tdName.appendChild(inputName);
        tr.appendChild(tdName);

        // Criar o elemento <td> para o input da quantidade
        const tdQuantity = document.createElement('td');
        const inputQuantity = document.createElement('input');
        inputQuantity.setAttribute('type', 'number');
        inputQuantity.setAttribute('name', 'number');
        inputQuantity.classList.add('input-qtd');
        inputQuantity.setAttribute('placeholder', '0');
        inputQuantity.setAttribute('min', '0');
        tdQuantity.appendChild(inputQuantity);
        tr.appendChild(tdQuantity);

        // Criar o elemento <td> para o input do preço
        const tdPrice = document.createElement('td');
        const inputPrice = document.createElement('input');
        inputPrice.setAttribute('type', 'text');
        inputPrice.classList.add('input-price');
        inputPrice.setAttribute('id', 'priceInput');
        inputPrice.setAttribute('oninput', 'formatPrice(this)');
        inputPrice.setAttribute('maxlength', '10');
        inputPrice.setAttribute('placeholder', '0,01');
        tdPrice.appendChild(inputPrice);
        tr.appendChild(tdPrice);

        // Criar o elemento <td> para o checkbox
        const tdCheckbox = document.createElement('td');
        const labelCheckbox = document.createElement('label');
        labelCheckbox.classList.add('container');
        const inputCheckbox = document.createElement('input');
        inputCheckbox.setAttribute('type', 'checkbox');
        const divCheckbox = document.createElement('div');
        divCheckbox.classList.add('checkmark');
        labelCheckbox.appendChild(inputCheckbox);
        labelCheckbox.appendChild(divCheckbox);
        tdCheckbox.appendChild(labelCheckbox);
        tr.appendChild(tdCheckbox);

        // Adicionar o elemento <tr> ao elemento pai

        parentElement.appendChild(tr);

    }

});

removeProduto.addEventListener('click', () => {
    // Selecione o elemento pai onde as divs foram adicionadas
    const parentElement = document.querySelector('.table');

    // Selecione o último elemento filho (última div adicionada)
    const lastChild = parentElement.lastElementChild;

    // Verifique se há algum elemento filho antes de remover
    if (lastChild) {
        // Remova o último elemento filho
        parentElement.removeChild(lastChild);
    }
});