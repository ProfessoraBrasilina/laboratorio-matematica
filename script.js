function calcular(){

    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    if(a==0){
        alert("O coeficiente 'a' deve ser diferente de zero.");
        return;
    }

    let delta = b*b - 4*a*c;

    let texto="<h3>Resultados</h3>";

    texto+="<b>Δ = </b>"+delta+"<br><br>";

    if(delta<0){

        texto+="Não possui raízes reais.<br><br>";

    }else{

        let x1=(-b+Math.sqrt(delta))/(2*a);
        let x2=(-b-Math.sqrt(delta))/(2*a);

        texto+="<b>x₁ = </b>"+x1.toFixed(2)+"<br>";
        texto+="<b>x₂ = </b>"+x2.toFixed(2)+"<br><br>";

    }

    let xv=-b/(2*a);
    let yv=a*xv*xv+b*xv+c;

    texto+="<b>Vértice:</b> ("+xv.toFixed(2)+" ; "+yv.toFixed(2)+")<br>";

    texto+="<b>Concavidade:</b> ";

    if(a>0){
        texto+="Para cima";
    }else{
        texto+="Para baixo";
    }

    document.getElementById("resultado").innerHTML=texto;

    desenharGrafico(a,b,c);

}

function desenharGrafico(a,b,c){

    let x=[];
    let y=[];

    for(let i=-10;i<=10;i+=0.1){

        x.push(i);
        y.push(a*i*i+b*i+c);

    }

    let grafico=[{

        x:x,
        y:y,
        mode:"lines",
        name:"f(x)"

    }];

    Plotly.newPlot("plot",grafico,{

        title:"Gráfico da Função do 2º Grau",

        xaxis:{title:"x"},

        yaxis:{title:"f(x)"}

    });

}

function mostrarResposta(n){

    let respostas={

        1:"Δ = 1<br>x₁ = 3<br>x₂ = 2",

        2:"Δ = 0",

        3:"Como a < 0, o vértice representa um ponto de máximo."

    };

    let campo=document.getElementById("resp"+n);

    let botao=event.target;

    if(campo.innerHTML==""){

        campo.innerHTML="<b>Resposta:</b><br>"+respostas[n];

        botao.innerHTML="Esconder resposta";

    }else{

        campo.innerHTML="";

        botao.innerHTML="Mostrar resposta";

    }

}

function corrigir(){

    let acertos=0;

    for(let i=1;i<=10;i++){

        let resposta=document.querySelector('input[name="q'+i+'"]:checked');

        if(resposta){

            acertos+=parseInt(resposta.value);

        }

    }

    let nota=(acertos).toFixed(1);

    document.getElementById("nota").innerHTML=

    "<h2>Resultado</h2>"+

    "Acertos: <b>"+acertos+" de 10</b><br><br>"+

    "Nota: <b>"+nota+"</b>";

}

calcular();