
// Primeira prática da atividade 11
function BemVindo(){
    let div = document.querySelector('div');
    let nomejava = document.querySelector("#nome");
    let idadejava = document.querySelector("#idade");
    let h1criar = document.createElement('h1');
    div.appendChild(h1criar);
    let texto = document.createTextNode(`Olá, ${nomejava.value}, você tem ${idadejava.value} anos. Seja bem vindo(a) ao meu site, te desejo muitas felicidades!`)
    h1criar.appendChild(texto); 
}
let botao = document.querySelector('botaozinho');
botao.onclick = BemVindo; 



