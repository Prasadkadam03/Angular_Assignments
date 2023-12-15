var Ret = false;
function ChkPrime(Value) {
    var i = 0;
    var Prime = true;
    for (i = 2; i <= (Value / 2); i++) {
        if ((Value % i) == 0) {
            Prime = false;
        }
    }
    return Prime;
}
Ret = ChkPrime(11);
if (Ret == true) {
    console.log("It is a prime number");
}
else {
    console.log("It is a not prime number");
}
