function numeros (a,b,c){
var arr = []
if ((a > b) && (a>c)){
arr.push(a)
if (b > c){
arr.push(b)
arr.push(c)
}
else {
    arr.push(c)
    arr.push(b)
}
}
if ((b>a) && (b>c)){
    arr.push(b)
    if (a >c){
        arr.push(a)
        arr.push(c)
        

        }
        else{
            arr.push(c)
            arr.push(a)
        }
     
      }
      if ((c>a) && (c>b)){
    arr.push(c);

      
      if (a > b){
          arr.push(a);
          arr.push(b);
      }
      else{
      arr.push(b)
      arr.push(a); 
      }
    }
    return arr
      

}
console.log(numeros(7,-14,21));





