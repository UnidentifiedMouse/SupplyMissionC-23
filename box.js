class Box{
    
     constructor(x,y,w,h){

         var options = {
             isStatic:true,
              restitution: 0.8,
              friction: 0.3,
              density: 1.0
         }
         this.body = Bodies.rectangle(x,y,w,h,options);
         World.add(world,this.body);
              this.height=h
              this.width=w
        }
   display(){
    fill("red");
    rectMode(CENTER);
    var pos = this.body.position
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
   }
   




}