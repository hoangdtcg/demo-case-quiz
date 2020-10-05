class Game2 {
    constructor(number) {
        this.number = number;
        this.holes = [];
    }

    init(){
        for (let i = 0; i < this.number; i++) {
            let hole = new Hole();
            this.holes.push(hole);
        }
    }

    hit(id){
        if(this.holes[id]){
            alert("Dap trung")
        }else {
            alert("Dap truot");
        }
    }

    display(){

    }
}
let game  = new Game2(9);
function hit(id) {
    game.hit(id);
}
