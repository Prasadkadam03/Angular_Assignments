function Maximum(Arr : number[]) : number
{
    var Large1st : number = Arr[0] ;
    var Large2nd : number = 0 ;
    var Cnt : number = 0;
    for(Cnt = 0; Cnt < Arr.length ; Cnt++)
    {
        if(Arr[Cnt] > Large1st )
        {
            Large2nd = Large1st;
            Large1st = Arr[Cnt];
        }
        else if ( (Arr[Cnt] > Large2nd) && (Arr[Cnt] < Large1st))
        {
            Large2nd = Arr[Cnt];
        }
    }
    return Large2nd;
}

var Arr : number[] = [23,89,6,29,56,45,77,32];

console.log("Sencond Largest number is : "+ Maximum(Arr));