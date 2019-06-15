let f;
let w;

function setup(){
    createCanvas(600, 600 );
    f=new bird(random(0, height));
    w= new wall(50,100,400);
}

function draw(){
    f.fall();
    background(0);
    f.show();
    w.show()        
}



function keyPressed(){
    if(keyCode===32){
        f.jump();
    }
}