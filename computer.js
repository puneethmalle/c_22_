class Computer{
    constructor(x,y,width,height,angle){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.angle=angle
        this.computer = loadImage("assets/player.png");
    }
    display(){
        push()
        translate(this.x,this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.computer,this.x,this.y,this.width,this.height);
        pop()
    }
}