 function Maximum (Value1: number , Value2: number ,Value3: number ) : number
 {
    if( (Value1 >= Value2) && (Value1 > Value3))
    {
        return Value1;
    }
    else if ( (Value2 >= Value1) && (Value2 > Value3))
    {
        return Value2;
    }
    else if ( (Value3 >= Value2) && (Value3 > Value1))
    {
        return Value3;
    }
    else
    {
        console.log("All values are equal");
        return Value1;
    }
    
 }

 var Ret : number = 0;
 
 Ret = Maximum(23 ,89 ,6);

 console.log("Maximum number is : "+ Ret);