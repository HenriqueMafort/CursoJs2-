function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anonas = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(anonas.value.length == 0 || Number(anonas) > ano){
        window.alert('[ERRO] Verifique seus dados e tente novamente!')
    }else{
        var genero = ''
        var sexref = document.getElementsByName('href')
        var idade = ano - Number(anonas.value)
        res.innerHTML = ` Encontramos um cadastro com ${idade} de idade `
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    }if (sexref[0].checked){
        genero = 'Homem'
        if(idade >=0 && idade< 10){
            img.setAttribute('src', 'bebe_homem.png')
        }
    }else if(sexref[1].checked){
        genero = 'Mulher'
       }
       res.innerHTML = `Detectamos uma pessoa ${genero} com ${idade} anos de idade`
}