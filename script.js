var tempo = document.getElementById('tempo');

let hr = 0;
let min = 0;
let seg = 0;
let intervalo;



function iniciar(){
   clearInterval(intervalo);
   intervalo = setInterval(main, 1000);
}


function pausar(){
    clearInterval(intervalo);
}

function limpar(){
    clearInterval(intervalo);
    hr = 0;
    min = 0;
    seg = 0;
    tempo.innerHTML = "00:00:00"
}

function main(){
    seg++

    if(seg === 60){
        seg = 0;
        min ++;
    }

    if(min === 60){
        hr++;
        min = 0;
    }

    return tempo.innerHTML = `${doisNumeros(hr)}:${doisNumeros(min)}:${doisNumeros(seg)}`
}


function doisNumeros(number){
    if(number < 10){
        return "0"+ number
    }else{
        return number
    }
}

