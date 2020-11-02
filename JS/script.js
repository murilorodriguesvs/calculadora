document.addEventListener('DOMContentLoaded', function(){
    //Display
    const tela = document.querySelector('#display');

    //Array que receberá os eventos de click
    let listenerBtn = [];

    //Teclas de ferramentas
    const reset = document.querySelector('#reset');
    const limpar = document.querySelector('#limpar');
    const igual = document.querySelector('#operadorIgual');
    const virgula = document.querySelector('#virgula');

    //Preencher array com operadores
    listenerBtn.push(virgula);
    listenerBtn.push(document.querySelector('#operadorAd'));
    listenerBtn.push(document.querySelector('#operadorSub'));
    listenerBtn.push(document.querySelector('#operadorMulti'));
    listenerBtn.push(document.querySelector('#operadorDiv'));

    //Preencher array com números
    listenerBtn.push(document.querySelector('#num0'));
    listenerBtn.push(document.querySelector('#num1'));
    listenerBtn.push(document.querySelector('#num2'));
    listenerBtn.push(document.querySelector('#num3'));
    listenerBtn.push(document.querySelector('#num4'));
    listenerBtn.push(document.querySelector('#num5'));
    listenerBtn.push(document.querySelector('#num6'));
    listenerBtn.push(document.querySelector('#num7'));
    listenerBtn.push(document.querySelector('#num8'));
    listenerBtn.push(document.querySelector('#num9'));

    //Adiciona na tela
    listenerBtn.forEach((item, index) => {
        item.addEventListener('click', function(){
            tela.value += `${listenerBtn[index].value}`;
        });
    });

    //Limpa a tela
    reset.addEventListener('click', function(){
        tela.value = '';
    });

    //Apaga o valor anterior
    limpar.addEventListener('click', function(){
            if (tela.value.length > 0) {
                let aux = tela.value.substring(0, tela.value.length - 1);
                tela.value = aux;
            }
    });

});
