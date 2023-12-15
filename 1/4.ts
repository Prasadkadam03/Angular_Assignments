var Ret : boolean = false;

function ChkPrime(Value : number) : boolean
{
    var i : number = 0;
    var Prime : boolean = true;
    for(i = 2 ; i <= (Value/2) ; i++)
    {
        if((Value % i) == 0)
        {
            Prime = false;
        }

    }
    return Prime;
}

Ret = ChkPrime(11);

if (Ret == true)
{
    console.log("It is a prime number");
}
else
{
    console.log("It is a not prime number");
}