class bird{
    constructor(y){
        this.x=30;
        this.y=y;
    }

    show(){
        push();
        fill(255);
        stroke(255);
        ellipse(this.x,this.y,30,30);
        pop();
    }

    fall(){
        this.y+=3;
        this.y=constrain(this.y,0,height)
    }

    jump(){
        this.y-=50;
        this.y=constrain(this.y, 0, height)
    }
}