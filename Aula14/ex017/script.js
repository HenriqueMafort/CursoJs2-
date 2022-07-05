function verificar(){
    var numero = window.document.getElementById('txtn')
    var tab = window.document.getElementById('tab')
    var res = window.document.getElementById('res')
    if(numero.value.length == 0){
    alert('[ERRO] Para gerar a tabuada deve colocar um numero!')

    }else{
        var n = Number(numero.value)
        var c = 1
        tab.innerHTML = ''
        while(c <= 10){
           let item = document.createElement('option')
           item.innerText = `${n} x ${c} = ${n*c}`
           item.value = `tab ${c}`
           tab.appendChild(item)
           c++
        }
    }
}