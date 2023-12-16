class Arithmetic
{
    private No1 : number;
    private No2 : number;

    constructor(A : number , B : number)
    {
        this.No1 = A;
        this.No2 = B;
    }

    Addition () : number
    {
        var Ans : number;
        Ans = this.No1 + this.No2;
        return Ans;
    }

    Subtraction () : number
    {
        var Ans : number;
        Ans = this.No1 - this.No2;
        return Ans;
    }

    Multiplication () : number
    {
        var Ans : number;
        Ans = this.No1 * this.No2;
        return Ans;
    }

    Division () : number
    {
        var Ans : number;
        Ans = this.No1 / this.No2;
        return Ans;
    }
}

var obj1 = new Arithmetic(100, 10);
var obj2 = new Arithmetic(25, 5);

var Result : number = 0;

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
