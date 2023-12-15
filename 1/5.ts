function Fibonacci(Value : number) : void
{
    var i : number = 0;
    var j : number = 0;
    var Fibo : number = 1;
   
    while( Fibo <= Value)
    {
        console.log(Fibo);
        i = j;
        j = Fibo;
        Fibo = i + j;
    }
}

Fibonacci(21);