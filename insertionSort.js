const quantidadeInput = document.querySelector('#quantidadeInput');
const gerarButton = document.querySelector('#gerarButton');
const ordenarButton = document.querySelector('#ordenarButton');
const arrayOriginalExibicao = document.querySelector('#arrayOriginal');
const arrayOrdenadoExibicao = document.querySelector('#arrayOrdenado');
const contadorPassosExibicao = document.querySelector('#contadorPassos');

let arrayAleatorio = [];
let contadorPassos = 0;

const gerarNumeros = () => {
    const quantidade = parseInt(quantidadeInput.value);
    arrayAleatorio = Array.from({ length: quantidade }, () => Math.floor(Math.random() * quantidade) + 1);
    arrayOriginalExibicao.textContent = `Array Original: [${arrayAleatorio.join(', ')}]`;
    arrayOrdenadoExibicao.textContent = `Array Ordenado: []`;
    contadorPassosExibicao.textContent = `Passos Necessários: 0`;
    ordenarButton.disabled = false;
    contadorPassos = 0;
};

const insertionSort = (arr) => {
    const arrayOrdenado = [...arr];
    for (let i = 1; i < arrayOrdenado.length; i++) {
        let chave = arrayOrdenado[i];
        let j = i - 1;
        while (j >= 0 && arrayOrdenado[j] > chave) {
            arrayOrdenado[j + 1] = arrayOrdenado[j];
            j = j - 1;
            contadorPassos++;
        }
        arrayOrdenado[j + 1] = chave;
        contadorPassos++;
    }
    return arrayOrdenado;
};

const ordenarArray = () => {
    const arrayOrdenado = insertionSort(arrayAleatorio);
    arrayOrdenadoExibicao.textContent = `Array Ordenado: [${arrayOrdenado.join(', ')}]`;
    contadorPassosExibicao.textContent = `Passos Necessários: ${contadorPassos}`;
    ordenarButton.disabled = true;
};

gerarButton.addEventListener('click', gerarNumeros);
ordenarButton.addEventListener('click', ordenarArray);
