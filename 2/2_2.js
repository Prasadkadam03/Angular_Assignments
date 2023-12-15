function Summation(Arr) {
    var Add = 0;
    var iCnt = 0;
    for (iCnt = 0; iCnt < Arr.length; iCnt++) {
        Add = Add + Arr[iCnt];
    }
    return Add;
}
var Arr = [23, 6, 7, 4, 5, 7];
console.log("Summation of numbers in array is : " + Summation(Arr));
