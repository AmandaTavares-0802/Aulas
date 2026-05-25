function adicionarNoFinal(lista, elemento){

    console.log(`Lista: ${lista}`)
    let nova_lista = [];

    for (let i = 0; i < lista.length; i++){
        nova_lista[i] = lista[i];

    };
    nova_lista[lista.length]= elemento;

    console.log(`Lista: ${nova_lista}`)
    lista = nova_lista;
    console.log(`Lista: ${lista}`)
    return nova_lista;
}

// elemento = ian
// lista = ['tom', 'bob', 'dan'];
// nova_lista = ['tom', 'bob', 'dan', 'ian']