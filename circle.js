class Circle {
	constructor(x,y,r){
	 var options = {
			restitution: 0.3,
			friction:0,
			density:5,
		}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.body = Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

        // Deleting the arrays after it goes off screen
        this.isOffScreen = function(){
            var pos = this.body.position;
            return(pos > height + 100);
        }

        this.removeFromWorld = function(){
            World.remove(world, this.body);
        }

    }


	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(0.1);
			stroke("black");
			fill("white");
			//draw the ellipse here to display the rubber ball
		    ellipse(0, 0, this.r * 2);
			pop()
	}

}