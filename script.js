
let senhas = ['senha'];
let logins = ['login'];
let tentativas_falhas = [ ];

function tentativa(){
let palavra = document.getElementById('login').value;
let palavra2 = document.getElementById('password').value;

if(logins.indexOf(palavra) != -1 && senhas.indexOf(palavra2) != -1){
window.location.href='about.html'
//window.opem(about.html)
}
else{
    alert('voce errou')
    tentativas_falhas.push(palavra)
    document.getElementById('lista').innerHTML=tentativas_falhas
    document.getElementById('login').value=null;
    document.getElementById('senha').value=null;
}
}
function voltar(){
    window.location.href='index.html'


}