let listaDeNumerosSorteado = [] ;
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});        
};

function exibirTextoInicial(){
    exibirTextoNaTela('h1','Jogo do numero secreto');
    exibirTextoNaTela('p','Escolha um numero entre 1 e 10.');
};

exibirTextoInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('h1','Acertou!');
        exibirTextoNaTela('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p','Menor');
        } else {
            exibirTextoNaTela('p','Maior');
        }
        tentativas++
        limpaCampo();
    };

}; 

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteado.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteado == [];
    };

    if(listaDeNumerosSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteado.push(numeroEscolhido);
        console.log(listaDeNumerosSorteado);
        return numeroEscolhido;        
    }; 
};

function limpaCampo(){
    chute = document.querySelector('input');
    chute.value = '';
};

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limpaCampo();
    tentativas = 1;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
};



//Coracao
let n = 10;
let str = "";
for (let i = n/2;i<n;i +=2){
    for(let j=1;j<n -i; j+=2){
        str += " ";
    };
    for(let j=1; j<i +1; j++){
        str += "*";
    };
    for(let j=1; j<n-i+1; j++){
        str += " ";
    };
    for(let j=1;j<i +1; j++){
        str += "*";
    };
    str +="\n";
};
for(let i=n;i>0;i--){
    for(let j=0;j<n -i; j++){
        str += " ";
    };
    for(let j=1;j<i*2; j++){
        str += "*";
    };
    str +="\n";
};
console.log(str);
//