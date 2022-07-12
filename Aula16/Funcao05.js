/*function fatorial(n){
    if (n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))
var n1 = Number(1)
var array = []
array.push(n1)
console.log(array)*/

var n = 8
valores = [3,4,5,8,2,0,11,5,9,4,0,8,7,51,68,1,8,4,7,8,8,1,58,]


/*for(var cont = 1; cont < valores.length; cont++){
    if(valores[cont] > valores[maior]){
        maior = cont
    }else if(valores[cont] < valores[menor]){
        menor = cont
    }
}
    console.log(maior)
    console.log(menor)
    console.log(valores[maior])
    console.log(valores[menor])
*/

    var maior = 0
    var menor = 1


for(var cont = 0; cont < valores.length; cont++){
    if (valores[cont] > maior){
        maior = cont
    }else if(valores[cont] < menor){
        menor = cont
    }
}
console.log(valores[maior])
console.log(valores[menor])
console.log()