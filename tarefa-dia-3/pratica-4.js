var num = 11;
var primo = `O número ${num} é primo`;

if (num == 1) {
  primo = `O número ${num} não é primo`;
} else if (num == 2) {
  primo = `O número ${num} é primo`;
} else {
  var numero = true;
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      var numero = false;
      primo = `O número ${num} não é primo`;
    }
  }
}
console.log(primo);
