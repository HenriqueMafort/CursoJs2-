var agora = new Date
var hora = agora.getHours()
console.log(`agora são ${hora} horas`)
if(hora < 12 && hora > 5){
    console.log('Tenha um bom dia')
}else if(hora >= 0 && hora <5) {
    console.log('boa madrugada')
}else if(hora <= 18){
    console.log('Tenha uma boa tarde')
}else if (hora > 18 && hora <= 24){
    console.log('tenha uma boa noite')
}else if(hora >= 0 && hora <5) {
    console.log('boa madrugada')
}