let ox,sam;
let cols, rows; let size =10
let threshold = 0.5; let t = 0; let colorR =10; let d =4;
let angle = 0;
let x = 100;
let y = 100;
let xSpeed = 3;
let ySpeed = 2;

function preload ()
{
    ox = loadFont ("VanillaCreamOx-gwXBR.otf");
    sam = loadImage("dino3.png");
}
   


function setup() 
{
	createCanvas(windowWidth, windowHeight);
    imageMode (CENTER);
    cols =width/size
    rows =height/size
    let c = d % colorR/colorR
    
    //frameRate()
   
}

function draw()
{
    background(0);
    fill(255,0,0);

    
    for(let i=0; i<cols; i++){
        for (let j=0; j<rows; j++){
            let x = size/2+ i*size;
            let y = size/2+ j*size;
            let d = dist(x,y,width/2,height/2);
            let k =100;

            let dx = x -width/2
            let dy = y - height/2
            let angle = atan2(dy,dx);

            let spiral=sin(d/k + angle + t);
            c=colorGradient(d);
            c = color(255,100);

            

            let distanceFactor =100;
            let angleFactor =5;
            let condition = sin(d/distanceFactor + angleFactor *angle);

            if (spiral > condition) {
                textSize(windowWidth/20);
            textAlign(CENTER,CENTER);
            textFont(ox);
            //fill(255,255,100,50)
             fill (50,90,255)
            text("x", x,y);
            }else {
                text(".", x,y)
            }
        }
        t -= 0.01
    }
    
   
    
    image(sam, windowWidth/2, windowHeight/2)
    
    pop();
    fill (255,255,0);
    textSize(windowWidth/20);
    textAlign(CENTER,CENTER);
    textFont(ox);
    text("Good luck with midterms!",x, y);
    x += xSpeed;
  y += ySpeed;

  // Bounce off edges
  if (x > width || x < 0) {
    xSpeed *= -1;
  }
  if (y > height || y < 0) {
    ySpeed *= -1;
  }
    angle += 0.02;
} 
    function colorGradient(d){
        let colors = [color (252,176,69), color (131,58, 180)];
        let colorRadius =10
        let amt= d% colorRadius/colorRadius

        return lerpColor (colors [0], colors [1],amt);

        

    
   
   
}
function windowResized()
{
    resizeCanvas(windowWidth,windowHeight)
}
