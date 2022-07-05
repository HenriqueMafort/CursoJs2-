function verificar(){
   var comeco = document.getElementById('inicio')
   var fim = document.getElementById('fim')
   var passo = document.getElementById('passo')
   var res = document.getElementById('res')

   if (comeco.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    alert('erro verifique seus dados. ')
    } else {
    res.innerHTML = 'Contando:'
    var i = Number(comeco.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if ( p <= 0){
    alert('PASSO INVALIDO SERA CONSIDERADO 1')
    p = 1
    }
    if(i < f){    
        for(var c = i; c <= f; c += p){
        res.innerHTML += ` ${c} \u{1f449}`
        } 
       
    } else{
        for(var c = i ; c >= f; c -= p){
            res.innerHTML += `${c} \u{1f449}`
        }
    }res.innerHTML += `\u{1f3c1}` 
    }  
   
}
   
   
   
   
   
   
   
   
   /*if (n1 == ''){
        window.alert('O começo não pode estar em branco')
        res.innerHTML = 'Tente novamente'
    }else if(n3 == 0){
    alert("[ERRO] PASSO INVÁLIDO! O valor será reajustado para 1!")
        n3 = n3 + 1
    }else
    for(n1;n1<=n2;n1 = n1 + n3){
        res.innerHTML += `${n1}, `
        

}*/
