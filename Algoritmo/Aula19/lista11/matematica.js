function somar(num1, num2){
    if (num1 == null || num1 == undefined){
        console.log('Parâmetro 1 não pode ser nulo ou indefinido');
        return
    }
    if (num2 == null || num2 == undefined){
        console.log('Parâmetro 2 não pode ser nulo ou indefinido');
        return
    }

    if (typeof num1 != 'number'){
        console.log("tipo inválido para o argumento 1");
        return
    }
    if (typeof num2 != 'number'){
        console.log("tipo inválido para o argumento 2");
        return
    }

    let resultado = num1 + num2
    console.log(`A soma dos números é: ${resultado}`);
    
}

somar(5,5)


function calcularDistancia(x1, x2, y1, y2){
    if (x1 == null || x1 == undefined){
        console.log("Parâmetro x1 não pode ser nulo ou indefinido");
        return
    }else if (x2 == null || x2 == undefined){
        console.log("Parâmetro x2 não pode ser nulo ou indefinido");
        return
    }else if (y1 == null || y1 == undefined){
        console.log("Parâmetro y1 não pode ser nulo ou indefinido");
        return
    }else if (y2 == null || y2 == undefined){
        console.log("Parâmetro y2 não pode ser nulo ou indefinido");
        return
    }

    if (typeof x1 != "number"){
        console.log("tipo inválido para o argumento x1");
        return
    } else if (typeof x2 != "number"){
        console.log("tipo inválido para o argumento x2");
        return
    } else if (typeof y1 != "number"){
        console.log("tipo inválido para o argumento y1");
        return
    } else if (typeof y2 != "number"){
        console.log("tipo inválido para o argumento y2");
        return
    }

    let resultado = Math.sqrt(((x2-x1) ** 2) + ((y2-y1) ** 2))
    console.log(`A distância dos dois pontos é: ${resultado}`);
    
}

calcularDistancia(2,2,2,5)

function converterParaHoraMinutoSegundo(numero){
    if (numero == null || numero == undefined){
        console.log("Parâmetro numero não pode ser nulo ou indefinido");
        return
    } 
    if (typeof numero != 'number'){
        console.log("tipo inválido para o argumento numero");
        return
    }

    let h = Math.floor(numero / 3600)
    let m = Math.floor((numero % 3600) / 60)
    let s = numero % 60

    let resultado = `${h}:${m}:${s}`
    console.log(`Convertendo os segundos dá: ${resultado}`);
    
}

converterParaHoraMinutoSegundo(140153)

function ePrimo(numero){
    let primo = false
    if(numero == null || numero == undefined){
        console.log("Parâmetro numero não pode ser nulo ou indefinido");
        return
    }

    if (typeof numero !=  'number'){
        console.log(`tipo inválido para o argumento numero`);
        return
    }

    if (numero <= 1){
        console.log(primo);
        return
    }

    for(let i = 2; i <= Math.sqrt(numero); i++){
        if(numero % i == 0 ){
            console.log(primo);
            return
        }
    }

    primo = true
    console.log(primo);
    
}

ePrimo(3)