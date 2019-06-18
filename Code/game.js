let f;
let w;
let wl=[];
let n;
let score=0;
let reset_button;

function setup(){
    createCanvas(600, 600 );
    f=new bird(random(0, height));
    w= new wall(50,floor(random(180,240)),floor(random(2,6))*100,(width-50)/2);
    wl.push(w);
    reset_button=createButton('PRESS TO RESET');
    reset_button.mousePressed(reset);
    for( n=1;n<4;n++){
        wl[n]=new wall(floor(random(20,50)),floor(random(180,280)),floor(random(0,7))*100,wl[n-1].x+300);
    }
    //  frameRate(10)
}

function draw(){
    f.fall();
    background(0);
    f.show();
    // w.show()     
    // w.move();  
    
    if(wl[0].x<0){
        wl.shift();
        let a=new wall(floor(random(20,50)),floor(random(180,280)),floor(random(1,6))*100,wl[wl.length-1].x+250);
        wl.push(a);
    }

    for(let i=0;i<wl.length;i++){
        wl[i].show();
        wl[i].move();

    }

    let a=wl[0].check(f);
    if(a){
        console.log("YOU LOST!");
        noLoop();
    }
    if(keyIsDown(32)){
        f.jump();
    }


}


function reset(){
    score=0;
    f=new bird(random(0, height));
    w= new wall(floor(random(20,50)),floor(random(180,280)),floor(random(3,6))*100,(width-50)/2);
    wl=[]
    wl.push(w);
    for( n=1;n<4;n++){
        wl[n]=new wall(floor(random(20,50)),floor(random(180,280)),floor(random(0,6))*100,wl[n-1].x+300);
    }
    console.clear()
    loop();
}

// function keyPressed(){
//     if(keyCode===32){
//         f.jump();
//     }
// }