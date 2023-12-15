function Maximum(Arr) {
    var Large = Arr[0];
    var iCnt = 0;
    for (iCnt = 0; iCnt < Arr.length; iCnt++) {
        if (Arr[iCnt] > Large) {
            Large = Arr[iCnt];
        }
    }
    return Large;
}
var Arr = [23, 89, 6, 29, 56, 45, 77, 32];
console.log("Maximum number is : " + Maximum(Arr));
