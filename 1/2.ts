var PI : number = 3.14;
var Ret : number = 0;

function Area ( Radius : number) : number 
{
    return PI*Radius*Radius;
}

Ret = Area(5);

console.log("Area of circle is : "+ Ret);
