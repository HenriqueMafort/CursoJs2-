function soma(n1, n2){
    var res = n1 + n2
    if (res % 2==0){
        return `o valor é ${res} e ele é par`
    }else{
        return `O valor é ${res} e ele é impar`
    }
}

console.log(soma(1, 8))