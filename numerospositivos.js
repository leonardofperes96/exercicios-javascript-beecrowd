
var array = [6,-5,7, -3.4, 4.6,12];

for (i=0; i<6; i++) {
  var valor = (parseFloat(lines.shift()).toFixed(2));
  array[i] = valor
}

for (i=0; i<6; i++) {
  if (array[i]<0) {
    array.length
  }
}

console.log(array.length+' valores positivos');