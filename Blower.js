class Blower {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true 
        };
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }
    Display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        pop();
    }
}

