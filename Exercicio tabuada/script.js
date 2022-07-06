function calculo(){
    var valortabuada = window.document.getElementById('txttab')
    var tab = window.document.getElementById('tab')
    
    if (valortabuada.value.length == 0){
    alert('algo esta errado')
    }else{
        var v1 = Number(valortabuada.value)
        var cont = 1
        tab.innerHTML = ''
        while(cont <= 10){
            var item = document.createElement('option')
            item.innerText = `${v1} x ${cont} = ${cont*v1} `
            item.value = `tab ${cont}`
            tab.appendChild(item)
            cont++
        }
    }
    
}