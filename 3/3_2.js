var Circle = /** @class */ (function () {
    function Circle(A) {
        this.Radius = A;
        this.PI = 3.14;
    }
    Circle.prototype.Area = function () {
        var Ans;
        Ans = this.Radius * this.Radius * this.PI;
        return Ans;
    };
    return Circle;
}());
var obj1 = new Circle(100);
var obj2 = new Circle(25);
var Result = 0;
Result = obj1.Area();
console.log(Result);
Result = obj2.Area();
console.log(Result);
