



function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

var x = prompt("Введите число", '');
var n = prompt("Введите степень", '');

if (n<0){
	console.log( 1/(pow( x, n ) ) );
	
} else {
	console.log('Результат = ', pow(x, n));
	
}



