function array(arr){
    return arr.split(",").slice(1,-1).join(",") || null;
  }


console.log(array('1,2,3')) // => '2'
console.log(array('1,2,4,5,6,3')) // => '2,4,6,8'
console.log(array('21,12')) // => null