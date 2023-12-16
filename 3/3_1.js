var Arithmetic = /** @class */ (function () {
    function Arithmetic(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithmetic.prototype.Addition = function () {
        var Ans;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithmetic.prototype.Subtraction = function () {
        var Ans;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    Arithmetic.prototype.Multiplication = function () {
        var Ans;
        Ans = this.No1 * this.No2;
        return Ans;
    };
    Arithmetic.prototype.Division = function () {
        var Ans;
        Ans = this.No1 / this.No2;
        return Ans;
    };
    return Arithmetic;
}());
var obj1 = new Arithmetic(100, 10);
var obj2 = new Arithmetic(25, 5);
var Result = 0;
Result = obj1.Addition();
console.log(Result);
Result = obj2.Addition();
console.log(Result);
Result = obj1.Subtraction();
console.log(Result);
Result = obj2.Subtraction();
console.log(Result);
Result = obj1.Multiplication();
console.log(Result);
Result = obj2.Multiplication();
console.log(Result);
Result = obj1.Division();
console.log(Result);
Result = obj2.Division();
console.log(Result);
