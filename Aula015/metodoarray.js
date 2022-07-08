var n = [1,5,4,9,8,7,6,4,2]


console.log(n) //mostra sem formatação

//abaixo esta o jeito burro de se fazer....
/*console.log(n[0])
console.log(n[1])
console.log(n[2])
console.log(n[3])
console.log(n[4])
console.log(n[5])
console.log(n[6])
console.log(n[7])
console.log(n[8])*/


//a forma a baixo funciona. porém existe uma outra melhor que irei demonstrar
/*for(pos = 0; pos < n.length; pos++){
    console.log(`o numero naposição ${pos} é igual a ${n[pos]}`)
}
console.log('porém se a gente colocar em ordem alfabética ficaria assim...')
n.sort()
for(pos = 0 ; pos < n.length; pos++){
    console.log(`em ordem crescente ficaria a posição ${pos} terá o numero ${n[pos]}`)
}*/


//esta forma é mais simplista e que irá agilizar o processo
for(pos in n){
    console.log(`nesta forma a posição é ${pos} e o numero é ${n[pos]}`)
}




