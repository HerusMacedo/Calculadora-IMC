const nome = document.getElementById("nome");

const altura = document.getElementById("altura");

const peso = document.getElementById("peso");

const calcular = document.getElementById("calcular");

const resultado = document.getElementById("resultado");


function imc() {

    const nome = document.getElementById("nome").value;

    const altura = document.getElementById("altura").value;

    const peso = document.getElementById("peso").value;

    const resultado = document.getElementById("resultado");

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = "";

        if(valorIMC < 18.5){

       classificacao ="Você esta abaixo do peso";

        }else if(valorIMC < 25){

            classificacao ="Você esta com o peso ideal";

        }else if(valorIMC < 30){

            classificacao ="Você esta levemente acima do peso";


        }else if(valorIMC < 35){

            classificacao ="Você esta com obesidade grau I";


        }else if(valorIMC < 40){

            classificacao ="Você esta com obesidade grau II";


        }else{

            classificacao ="Você esta com obesidade grau III. Cuidado!!";


        }

        resultado.textContent =`${nome} seu IMC é ${valorIMC} e você esta ${classificacao}`;


    } else {

        resultado.textContent = "Preencha todos os campos";

    }




}




calcular.addEventListener('click', imc);