var num = [5,8,9,2,3]
num.push(1)
num.sort()
console.log(`a array tem ${num.length} posicoes`)
console.log(num[0])
var pos = num.indexOf(7)
if (pos == -1){
    console.log(`O valor não existe na variavel`)
}else{
console.log(`o valor 8 está na posição ${pos}`)
}