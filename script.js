var questions = [
    { 
        prompt: "Qual é a cidade mais populosa do mundo?\n(a) Chongqing\n(b) Karachi\n(c) Istambul",
        answer: "a"
    },
    { 
        prompt: "Qual é o maior animal do mundo?\n(a) Elefante cinza\n(b) Baleia celeste\n(c) Baleia azul",
        answer: "c"
    },
    
    { 
        prompt: "O maior bolo do mundo, feito na Itália, tinha quantos metros quadrados de superfície?\n(a) 230\n(b) 200\n(c) 179",
        answer: "a"
    }
];

var score = 0;

for(var i = 0; i < questions.length; i++){
    var userResponse = window.prompt(questions[i].prompt);
    var correctResponse = questions[i].answer;
    if(userResponse == correctResponse || userResponse == correctResponse.toUpperCase()){
        score++;
        alert("Certa resposta!");
    } else {
        alert("Você errou, que pena!");
    }
}

document.write("<h1>Você acertou " + score + " perguntas de " + questions.length + " perguntas.</h1>");