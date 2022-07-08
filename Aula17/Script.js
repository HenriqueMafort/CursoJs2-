function iniciar(){
    var valor = document.getElementById('valor')
    var n1 = window.prompt('digite um numero')
    valor.innerHTML  = parouimp(n1)
}

/*neste caso tudo vai iniciar quando eu clicar no botao. depois disso ele vai iniciar a funcao iniciar. vai trazer o
valor da div que tinha id = "Valor" e depois pegado o valor n1 do prompt no web.
para resultado ele chama uma nova função que é direcionado para o parouimp(n1) e leva o n1 como valor e este valor é 
o digitado no prompt. nesta nova função ele vai ser recebido como n já que não precisa ser a mesma var. e vai
executar o codigo. a partir da resposta ele vai transferir o valor para o n atravez do "return" e vai devolver o n para
o n1 como o resultado. depois vai passar o n1 para o valor e demonstrar na tela que é um innerhtml*/

function parouimp(n){
    if (n % 2 == 0){
        return 'o valor é par'
    }else{
        return ' o valor é impar'
    }
}
