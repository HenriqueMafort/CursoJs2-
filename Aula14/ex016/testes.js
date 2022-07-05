if (comeco.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    alert('erro verifique seus dados. ')
   } else {
    res.innerHTML = 'Contando:'
    var i = Number(comeco.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if (i < f) {
         for (var c = i ; c <= f ; c += p){
             res.innerHTML += `${c} \u{1f449}`
        }
    } else {
        for(var c = i; c > i ; c += p){
            res.innerHTML += `${c} \u{1f449}`
        }
    }    
     res.innerHTML = `\u{1f3c1}`
    }