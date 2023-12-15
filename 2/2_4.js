var Armstrong = /** @class */ (function () {
    function Armstrong(A) {
        this.No = A;
        this.temp = this.No;
        this.Cnt = 0;
        this.Add = 0;
        this.i = 0;
    }
    Armstrong.prototype.MakeArray = function () {
        while (this.temp > 0) {
            this.temp = Math.floor(this.temp / 10);
            this.Cnt++;
        }
        this.Arr = new Array(this.Cnt);
        this.temp = this.No;
        for (this.i = 0; this.i < this.Cnt; this.i++) {
            this.Arr[this.i] = this.temp % 10;
            this.temp = Math.floor(this.temp / 10);
        }
    };
    Armstrong.prototype.ChkArmstrong = function () {
        for (this.i = 0; this.i < this.Arr.length; this.i++) {
            this.Add = this.Add + (Math.pow(this.Arr[this.i], 3));
        }
    };
    Armstrong.prototype.Display = function () {
        this.MakeArray();
        this.ChkArmstrong();
        if (this.Add == this.No) {
            console.log(this.No + " is a Armstrong number");
        }
        else {
            console.log(this.No + " is not Armstrong number");
        }
    };
    return Armstrong;
}());
var obj = new Armstrong(153);
obj.Display();
