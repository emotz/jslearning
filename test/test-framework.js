var prefix;
function log(msg) {
  console.log(prefix + msg);
}

var totalfailures = 0;
var totalpassed = 0;

function assert(pred) {
  if (pred) {
    totalpassed = totalpassed + 1;
    log("Ok");
  } else {
    totalfailures = totalfailures + 1;
    log("Not ok");
  }
}
/////////////////////////////////////////////////
function add(x, y) {
  return x + y;
}

prefix = "add: ";
assert(add(5, 9) === 14);
assert(add(1, 3) === 4);
assert(add(5, 4) === 8);
assert(add(-10, 1) === -9);

function multiply(x, y) {
  return x * y;
}

prefix = "multiply: ";
assert(multiply(5, 10) === 50);
assert(multiply(-5, 2) === -20);
/////////////////////////////////////////////////

prefix = "global: ";
log("Total passed: " + totalpassed);
log("Total failures: " + totalfailures);
