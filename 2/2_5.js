var str = "Marvellous";
var ip = "Pune Kothrud marvellous Infosystem";
var bFlag = false;
var i, j = 0;
for (i = 0; i < ip.length; i++) {
    if (ip[i] == str[0]) {
        for (j = 0; j < str.length; j++) {
            if (str[j] != ip[i]) {
                break;
            }
            i++;
        }
        if (j >= str.length) {
            bFlag = true;
        }
    }
}
if (bFlag == true) {
    console.log("String contains Marvellous in it");
}
else {
    console.log("String not contains Marvellous in it");
}
