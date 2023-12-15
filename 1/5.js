function Fibonacci(Value) {
    var i = 0;
    var j = 0;
    var Fibo = 1;
    while (Fibo <= Value) {
        console.log(Fibo);
        i = j;
        j = Fibo;
        Fibo = i + j;
    }
}
Fibonacci(21);
