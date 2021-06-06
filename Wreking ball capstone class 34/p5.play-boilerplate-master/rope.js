class Rope {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 350,
        }

        this.pointB = pointB;
        this.body = Constraint.create(options);

        World.add(world,this.body);

    }
    display() {
        var pointA = this.body.bodyA.position;
        var pointB = this.pointB;

        push();

        stroke("white");
        strokeWeight(3);

        line(pointA.x, pointA.y, pointB.x, pointB.y);

        pop();
    }
}