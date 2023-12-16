class Circle
{
    public Radius : number;
    public PI : number;

    constructor(A : number )
    {
        this.Radius = A;
        this.PI = 3.14;
    }

    Area () : number
    {
        var Ans : number;
        Ans = this.Radius * this.Radius * this.PI;
        return Ans;
    }
}

class Circlex extends Circle 
{
    constructor(A: number)
    {
        super(A);
    }

    Circumference(): number 
    {
        var Ans : number;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    }
}

var No1 : number = 100;
var No2 : number = 25;

var obj1 = new Circlex(No1);
var obj2 = new Circlex(No2);


var Result : number = 0;

Result = obj1.Area();
console.log("Area of circle with radius "+ No1 + " is :"+Result);

Result = obj2.Area();
console.log("Area of circle with radius "+ No2 + " is :"+Result);

Result = obj1.Circumference();
console.log("Circumference of circle with radius "+ No1 + " is :"+Result);


Result = obj2.Circumference();
console.log("Circumference of circle with radius "+ No2 + " is :"+Result);