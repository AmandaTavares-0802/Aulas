function adicionarNoFinal(lista, elemento) {
    let novaLista = [];

    for (let i = 0; i < lista.length; i++) {
        novaLista[i] = lista[i];
    }

    novaLista[novaLista.length] = elemento;

    return novaLista;
}

function removerDoFinal(lista) {
    let novaLista = [];

    if (lista.length === 0) {
        return novaLista;
    }

    for (let i = 0; i < lista.length - 1; i++) {
        novaLista[i] = lista[i];
    }

    return novaLista;
}

function removerDoInicio(lista) {
    let novaLista = [];

    if (lista.length === 0) {
        return novaLista;
    }

    for (let i = 1; i < lista.length; i++) {
        novaLista[i - 1] = lista[i];
    }

    return novaLista;
}

function adicionarNoInicio(lista, elemento) {
    let novaLista = [];

    novaLista[0] = elemento;

    for (let i = 0; i < lista.length; i++) {
        novaLista[i + 1] = lista[i];
    }

    return novaLista;
}

function alterarLista(lista, indice, quantidade, novoElemento) {
    let novaLista = [];

    for (let i = 0; i < indice && i < lista.length; i++) {
        novaLista[i] = lista[i];
    }

    let pos = indice;

    if (novoElemento !== undefined) {
        novaLista[pos] = novoElemento;
        pos++;
    }

    for (let i = indice + quantidade; i < lista.length; i++) {
        novaLista[pos] = lista[i];
        pos++;
    }

    return novaLista;
}