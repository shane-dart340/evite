let yPos=0;
let speed=1;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(173,216,230);
  
  stroke(0)
  
  fill(242,187,29)
  strokeWeight(0)
  ellipse(200,yPos+150,60,80)
  strokeWeight(2)
  line (200,yPos+190,200,yPos+260)
  
  
  
  fill(222,37,35)
  strokeWeight(0)
  ellipse (140,200,60,80)
  strokeWeight(2)
  line(140,240,140,310)
  
  fill(2,222,67)
  strokeWeight(0)
 ellipse (260,200,60,80)
  strokeWeight(2)
   line(260,240,260,310)
  

  //ellipse(xPos,yPos, a);
 //a= a + speed;
  
  yPos=yPos-1
  
  fill(222,35,145)
  ellipse(65,317,15,15)
   rect(30,320,70,70)
   line(65,320,65,390)
  line (30,355,100,355)
  

 

  fill(13,222,204)
  ellipse(335,317,15,15)
  rect(300,320,70,70)
  line(335,320,335,390)
  line(300,355,370,355)
}