class Ground
{
    constructor(x,y,w,h)
    {
        let options={
            isStatic:true
        };
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h
        this.x=x
        this.y=y
        World.add(world,this.body)
    }
    display(){
        var groundPosition=this.body.position
        push()
        translate(groundPosition.x,groundPosition.y)
        rectMode(CENTER)
        strokeWeight(4)
        fill("blue")
        rect(0,0,this.w,this.h)
        pop()
    }
}