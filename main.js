function min(a1, a2){
    return Math.min(a1, a2);
}

console.log(min(310811, 5034204));

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("число", '');
  let n = prompt("стеаень", '');
  
  if (n < 1) {
  } else {
    alert( pow(x, n) );
  }