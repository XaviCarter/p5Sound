var colourValue = '#F9F108';
var circleX, circleY, circleRad;
var drawText = false;

function setup() {
    var canvas = createCanvas(1600, 1200);
    canvas.parent("p5container");
    
    initCircle();
    
}

function draw() {
    background('#F9F108');

    //outline
    fill('#F9F108');
    rect(0, 0, 50, 1200);

    fill('#F9F108');
    rect(1550, 0, 50, 1200);

    fill('#F9F108');
    rect(0, 0, 1600, 50);

    fill('#F9F108');
    rect(0, 1150, 1600, 50);
    
    //radiation symbol
    fill(0);
    ellipse(800, 600, 250);
    
    fill('#F9F108');
    ellipse(800, 600, 200);

    fill(0);
    triangle(800, 600, 750, 699, 850, 699)

    fill(0);
    triangle(800, 600, 693, 600, 730, 510)

    fill(0);
    triangle(800, 600, 907, 600, 870, 510)

    fill(0, 0, 0);
    ellipse(800,600, 60);

    if(mouseX > (circleX - circleRad/2)
      && mouseX < (circleX + circleRad/2)
      && mouseY > (circleY - circleRad/2)
      && mouseY < (circleY + circleRad/2)
      ) {
          colourValue = '#B3AD05';
      } 
      else {
          colourValue = '#F9F108';
      }
    
    fill(colourValue);
    stroke(0);
    strokeWeight(6);
    ellipse(width/2, height/2, 600, 50);

function initCircle() {
    circleX = width/2;
    circleY = height/2;
    circleRad = 50;
}

function mousePressed() {
    if(mouseX > (circleX - circleRad/2)
      && mouseX < (circleX + circleRad/2)
      && mouseY > (circleY - circleRad/2)
      && mouseY < (circleY + circleRad/2)
    ) {
        openDoor = true;
    } else {
        openDoor = false;
    }  


}
    

}