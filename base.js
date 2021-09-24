class Base{
    constructor(x,y,width,height,angle){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.angle=angle
        this.base = loadImage("assets/base.png");
    }
    show(){
        push()
        translate(this.x,this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.base,this.x,this.y,this.width,this.height);
        pop()
    }
}