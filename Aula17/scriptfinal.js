function verificar(){
    var numero = window.document.getElementById('txtb')
    
    if(numero.value.length == 0){
        window.alert('Tem algo errado. favor verificar')

    }else{
        var num = Number(numero.value)
        var n = [num]  
        var tab = document.getElementById("tab")
        var item = document.createElement('option')
        tab.appendChild(item)
        item.innerHTML += n


    }
    
}