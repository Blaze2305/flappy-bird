class wall{
    constructor(w,gap,y,x){
        this.y=y;
        this.gap=gap;
        this.w=w;
        this.x=x;
    }

    show(){
        push();
        rectMode(CENTER);
        stroke(255);
        // noFill();
        fill(150)
        rect(this.x,(this.y-this.gap/2)/2,this.w,this.y-this.gap/2);
        rect(this.x,(height+this.y+this.gap/2)/2,this.w,height-this.y-this.gap/2);
        pop();
    }

    move(){
        this.x-=2;
    }

    check(bird){
        let a= (bird.x+15>=this.x-this.w/2) ? true:false;        
        let b=(bird.y+15>this.y+this.gap/2 || bird.y-15<this.y-this.gap/2)?true:false;

        if(a && b){
            return(true);
        }
        else{
            return(undefined);
        }
    }

}