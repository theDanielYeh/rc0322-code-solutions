/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) === true && amount > 0) {
    var A = new Transaction();
    A.type = 'deposit';
    A.amount = amount;
    this.transactions.push(A);

    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) === true && amount > 0) {
    var A = new Transaction();
    A.type = 'withdrawal';
    A.amount = amount;
    this.transactions.push(A);

    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var Balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'withdrawal') {
      Balance -= this.transactions[i].amount;
    } else if (this.transactions[i].type === 'deposit') {
      Balance += this.transactions[i].amount;
    }
  }
  return Balance;
};
