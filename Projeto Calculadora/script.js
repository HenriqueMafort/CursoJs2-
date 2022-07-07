function inicia(){
    var n1 = Number(prompt('Digite um numero'))
    var n2 = Number(prompt('Digite outro numero'))
    var res = prompt('Digite o operador.')
    var resposta = document.getElementById('resposta')
    switch(res){
        case "+"  :
            alert(`o valor é ${n1+n2}`);
            break
        case "-" : 
        alert(`o valor é ${n1-n2}`);

    }
}