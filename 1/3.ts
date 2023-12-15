
function DisplayFactors(Value : number) : void
{
    var i : number = 0;
    for(i = 1 ; i <= (Value/2) ; i++)
    {
        if((Value % i) == 0)
        {
            console.log(i);
        }
    }
}

DisplayFactors(20);