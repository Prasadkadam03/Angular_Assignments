function Maximum(Arr) {
    var Large1st = Arr[0];
    var Large2nd = 0;
    var Cnt = 0;
    for (Cnt = 0; Cnt < Arr.length; Cnt++) {
        if (Arr[Cnt] > Large1st) {
            Large2nd = Large1st;
            Large1st = Arr[Cnt];
        }
        else if ((Arr[Cnt] > Large2nd) && (Arr[Cnt] < Large1st)) {
            Large2nd = Arr[Cnt];
        }
    }
    return Large2nd;
}
var Arr = [23, 89, 6, 29, 56, 45, 77, 32];
console.log("Sencond Largest number is : " + Maximum(Arr));
