const quizs = [
    {
        question:"Dau la dac san Viet Tri",
        answers: ["Thit cho", "Thit bo", "Thit ga", "Thit chim"],
        correct: 0
    },
    {
        question:"Ai la dai ca cua lop?",
        answers: ["Thuong", "Duc", "Uyen", "Tuyet"],
        correct: 3
    },
    {
        question:"Ai la nguoi xinh nhat lop?",
        answers: ["Lam", "Duc", "Ca 2 deu xinh", "Khong ai xinh ca"],
        correct: 2
    },
    {
        question:"Ai yeu bac ho nhat?",
        answers: ["Toan dan viet nam", "Chac chan la em", "Khong phai em", "True"],
        correct: 0
    }
];

class Game {
    constructor(number,quizs) {
        this.number = number;
        this.quizs = quizs;
        this.quizUse = [];
        this.current = 0;
        this.prize = 100;
     }

     init(){
         for (let i = 0; i < this.number; i++) {
             let rand = Math.floor(Math.random()*this.quizs.length);
             let quizData = this.quizs[rand];
             this.quizs.splice(rand,1);
             let quiz = new Quiz(quizData.question,quizData.answers,quizData.correct);
             this.quizUse.push(quiz);
         }
     }

     display(){
        console.log(this.quizUse[this.current].question);
        document.getElementById("current").innerHTML = 'Câu số '+ (this.current+1);
        document.getElementById("prize").innerHTML = 'So tien thuong la '+ (this.prize);
        document.getElementById("question").innerHTML = this.quizUse[this.current].question;

        let ans = document.getElementById("answer");
        let str =  '';
         for (let i = 0; i < this.quizUse[this.current].answers.length; i++) {
             str += `<div id="ans-"${i} onclick="chooseAns(${i})">${this.quizUse[this.current].answers[i]}</div>`;
         }
         ans.innerHTML = str;
     }

     nextQuiz(){
        if(this.current < this.number-1){
            this.current++;
            this.prize = this.prize*2;
        }
        this.display();
     }

     chooseAnswer(ansID){
        if(ansID == this.quizUse[this.current].correct){
            alert("Tra loi dung");
            this.nextQuiz();
        }else {
            alert("Ngu. Ban nhan ve " + this.prize+" tien thuong");
            this.current = 0;
            this.display();
        }
     }
}


let game = new Game(3,quizs);
game.init();
game.display();

function next() {
    game.nextQuiz();
}

function chooseAns(id) {
    game.chooseAnswer(id);
}
