function Account(theBalance){
	var balance = theBalance;
	this.deposit = function(amount){
		balance += amount;
	};
	this.withdraw = function(amount){
		balance -= amount;
	};
	this.getBalance = function(){
		return balance;
	};
}
var acc1 = new Account(10000);
acc1.deposit(100);
acc1.withdraw(200);
console.log("Balance: " + acc1.getBalance());