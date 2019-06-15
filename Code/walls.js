class wall{
    constructor(w,gap,y){
        this.y=y;
        this.gap=gap;
        this.w=w;
        this.x=width-this.w;
    }

    show(){
        push();
        rectMode(CENTER);
        stroke(255);
        noFill();
        rect(this.x,(this.y-this.gap/2)/2,this.w,this.y-this.gap/2);
        rect(this.x,(height+this.y+this.gap/2)/2,this.w,height-this.y-this.gap/2);

        pop();
    }
}