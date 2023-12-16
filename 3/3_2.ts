class Circle
{
    private Radius : number;
    private PI : number;

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



var obj1 = new Circle(100);
var obj2 = new Circle(25);

var Result : number = 0;

Result = obj1.Area();
console.log(Result);

Result = obj2.Area();
console.log(Result);