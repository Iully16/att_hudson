// Array de exemplo
const data = [
    { id: 1, name: 'Amanda Martins' },
    { id: 2, name: 'Ana Karolliny' },
    { id: 3, name: 'Anne Izabelly' },
    { id: 4, name: 'Asafe Kuesten' },
    { id: 5, name: 'Antônio de Jesus' },
    { id: 6, name: 'Cintya Karolline' },
    { id: 7, name: 'Dayana Alves' },
    { id: 8, name: 'Eduardo Henrique' }
];

// Função para exibir os elementos filtrados
function showResult() {
    const filter = document.getElementById('filter');
    const filterValor = filter.value.toLowerCase();

    const filteredData = data.filter(item => {
        const itemName = item.name.toLowerCase();
        return itemName.includes(filterValor);
    });

    const resultList = document.getElementById('result');
    resultList.innerHTML = '';

    filteredData.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item.name;
        resultList.appendChild(li);
    });
}

// Adiciona um listener de eventos para o input de filtro
const filter = document.getElementById('filter');
filter.addEventListener('input', showResult);

// Exibe todos os resultados ao carregar a página
showResult();
