var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []





function adicionar(){
    if (isNum(num.value) && !inlist(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.innerText = `Valor ${num.value} Adidionado`
        lista.appendChild(item)
        res.innerHTML = ''
        
    }else{
        alert('valor invalido')
    } 
    num.value = ''
    num.focus()
}

function finalizar(){
    
    if(valores.length == 0){
        alert('Digite ao menos um valor')
    }else{
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        soma = 0
        
        for(var pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }else if(valores[pos] < menor){
                menor = valores[pos]
            }
            media = soma / tot
        }
        res.innerHTML = ''
        res.innerHTML += `Somando todos os numeros temos ${tot}<br>`
        res.innerHTML += `O maior valore é ${maior}<br>`
        res.innerHTML += `O menor valor é ${menor}<br>`
        res.innerHTML += `Somanto todos os valores ${soma}<br>`
        res.innerHTML += `A média dos valores é ${media}`
    
   
}
}


    

//------------------------------------ FUNCOES --------------------------------------------------------//


function isNum(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inlist(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


