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

const bubbleSort = (arr) => {
    const arrayOrdenado = [...arr];
    for (let i = 0; i < arrayOrdenado.length - 1; i++) {
        for (let j = 0; j < arrayOrdenado.length - 1 - i; j++) {
            if (arrayOrdenado[j] > arrayOrdenado[j + 1]) {
                [arrayOrdenado[j], arrayOrdenado[j + 1]] = [arrayOrdenado[j + 1], arrayOrdenado[j]];
            }
            contadorPassos++;
        }
    }
    return arrayOrdenado;
};

const ordenarArray = () => {
    const arrayOrdenado = bubbleSort(arrayAleatorio);
    arrayOrdenadoExibicao.textContent = `Array Ordenado: [${arrayOrdenado.join(', ')}]`;
    contadorPassosExibicao.textContent = `Passos Necessários: ${contadorPassos}`;
    ordenarButton.disabled = true;
};

gerarButton.addEventListener('click', gerarNumeros);
ordenarButton.addEventListener('click', ordenarArray);
