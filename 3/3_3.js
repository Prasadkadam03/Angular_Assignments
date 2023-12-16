var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Circlex = /** @class */ (function (_super) {
    __extends(Circlex, _super);
    function Circlex(A) {
        return _super.call(this, A) || this;
    }
    Circlex.prototype.Circumference = function () {
        var Ans;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    };
    return Circlex;
}(Circle));
var No1 = 100;
var No2 = 25;
var obj1 = new Circlex(No1);
var obj2 = new Circlex(No2);
var Result = 0;
Result = obj1.Area();
console.log("Area of circle with radius " + No1 + " is :" + Result);
Result = obj2.Area();
console.log("Area of circle with radius " + No2 + " is :" + Result);
Result = obj1.Circumference();
console.log("Circumference of circle with radius " + No1 + " is :" + Result);
Result = obj2.Circumference();
console.log("Circumference of circle with radius " + No2 + " is :" + Result);
