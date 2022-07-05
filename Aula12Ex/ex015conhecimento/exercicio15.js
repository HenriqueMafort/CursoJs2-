function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    idadepessoa = document.getElementById('anonas')
    var res = document.getElementById('res')
if(idadepessa.value.length == 0 || Number(idadepessoa.value)>ano){
    window.alert('esta certo')
}
}