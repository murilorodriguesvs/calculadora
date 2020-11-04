window.addEventListener('load', function(){
    
    //Guarda display em uma variável
    let display = document.querySelector('#display');

    //Guarda botões em variável
    let reset = document.querySelector('#reset');
    let limp = document.querySelector('#limpar');
    let result = document.querySelector('#operadorIgual');

    //Guarda operadores em um Array
    let operBtn = [];
    operBtn.push(document.querySelector('#operadorAd'));
    operBtn.push(document.querySelector('#operadorSub'));
    operBtn.push(document.querySelector('#operadorMulti'));
    operBtn.push(document.querySelector('#operadorDiv'));

    //Guardar números em um Array
    let numBtn = [];
    numBtn.push(document.querySelector('#virgula'));
    numBtn.push(document.querySelector('#num0'));
    numBtn.push(document.querySelector('#num1'));
    numBtn.push(document.querySelector('#num2'));
    numBtn.push(document.querySelector('#num3'));
    numBtn.push(document.querySelector('#num4'));
    numBtn.push(document.querySelector('#num5'));
    numBtn.push(document.querySelector('#num6'));
    numBtn.push(document.querySelector('#num7'));
    numBtn.push(document.querySelector('#num8'));
    numBtn.push(document.querySelector('#num9'));
    
    //Adiciona click nos operadores
    for(let i = 0; i < operBtn.length; i++){
        operBtn[i].addEventListener("click", function(){
            adicionarTela();
            
        });
    };
    
    //Adiciona click nos numeros
    for(let j = 0; j < numBtn.length; j++){
        numBtn[j].addEventListener("click", adicionarTela);
    };
    
    //Adiciona no display
    function adicionarTela(){
        display.value += event.target.value;
    }
    
    //Apaga o digito anterior
    function apagarAnterior() {
        if (display.value.length > 0) {
            var aux = display.value.substring(0, display.value.length - 1);
            display.value = aux;
        }
    }
    
    //Define operador
    function verificarOperador(valor) {
        switch (valor) {
            case "+":
                return true;
            case "-":
                return true;
            case "*":
                return true;
            case "/":
                return true;

            default:
                return false;
        }
    }

    function verificarResultado() {
        try{
            var aux = display.value.substring(display.value.length - 1, display.value.length);
            if(verificarOperador(aux)){
                apagarAnterior()
            }
            
            
            var valorCalculado = eval(display.value); //calcular o conteúdo da string
            if (valorCalculado || valorCalculado == "0") {
                display.value = valorCalculado;
            } else {
                throw "erro";
            }
        } catch (e) {
            console.error(e);
        }
    }

    //Calcula valor
    result.onclick = function (){
        verificarResultado();
    }

    //Limpa calculadora
    reset.addEventListener("click", function(){
        display.value = '';
    });

    //Limpa digito
    limp.addEventListener("click", function(){
        apagarAnterior();
    })
});