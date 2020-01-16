class Bird
{
    constructor(x,y,width,height)
    { 
        var option=
        {
            'friction':10000000.0
            
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position; 
        pos.x=mouseX;
        pos.y=mouseY;
        var angle=this.body.angle;
       push();
    translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("red");
        fill(255);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop(); 
    }

}