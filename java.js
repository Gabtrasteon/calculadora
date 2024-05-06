function inserir(numero) {
    var valor = document.getElementById('display').value;
    document.getElementById('display').value = valor + numero;
}
function inserir(caractere){
    var valor = document.getElementById('display').value;
    document.getElementById('display').value = valor + caractere;
}
function calcular(){
    var expressap = document.getElementById('display').value;
    var resultado = eval(expressap);
    document.getElementById('display').value = resultado;
}
function limpar(){
    document.getElementById('display').value = '';
}
function apagar(){
    var valor = document.getElementById('display').value;
    document.getElementById('display').value = valor.slice(0, -1);
}