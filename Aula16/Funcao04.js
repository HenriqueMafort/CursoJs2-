function fatorial(n){
    var fat = 1
    for (var c = n; c > 1 ; c--){
        fat *= c
    }
    return fat 
}

console.log(fatorial(5))
/* este valor acma pega o valor de 5 como parametro joga dentro da funcao Fatorial(n) e vira Fatorial(5), 
adiciona uma variaval de controle. e faz um loop for. "para var c recebe n e enquanto o c for 1 diminua 1 do c e depois
faca fat pega o valor atual de fat e multiplica por c, repetindo isso ate o valor de c for 1. depois retorne o valor de 
fat para o console log que era 5 e passou a valer 120 neste exemplo"*/