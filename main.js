var botaoKizaru = document.querySelector('#kizaru');
var personagem =document.querySelector('.personagem');

botaoKizaru.onclick = function(){
    personagem.classList.toggle('personagem-ativo');
}