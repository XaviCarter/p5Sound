var mySong, amplitude, play

function preload() {
    mySong = loadSound('assets/massiveAttackAngel.mp3');
}

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");
    rectMode(CENTER);
    

    amplitude = new p5.Amplitude()
    
    background(0);
    noStroke()

    play = false;
    var button = createButton(" Play ")
    button.center()
    button.addClass('btn')

    button.mousePressed(function() {
        play = true;
        mySong.play()
        button.hide()
    })

}

function draw() {
    if(play == true){
        var level = amplitude.getLevel()
        var vol = map(level, 0, 1, 0, 1000)
        var col = map(level, 0, 1, 0, 255)
    
        background(col)

        console.log(amplitude)
    
 

        fill(col, 255, 255);
        ellipse(width/2, height/2, vol);

        fill(255, 255, col);
        ellipse(width/2, height/2, vol/2);

        fill(255, col, 255);
        ellipse(width/2, height/2, vol/4);  
    }

}