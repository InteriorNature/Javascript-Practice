/* Flatten Arrays by One Level or Multiple Levels*/
/* would benefit from an additional counter arg, so that
user can specify number of levels to flatten*/

/*Flatten multi-dimensional arrays by 1 level only*/
function flattenArrOnce(arr1) {
  return arr1.reduce((acc, val) => acc.concat(val),[]);	
};

/*Flatten multi-dimensional arrays to 1 unified level*/
/* Should have made recursive: acc.concat(flattenALL(val)) */
function flattenALL(arr1) {
  return arr1.reduce((acc, val) => 
  	Array.isArray(val) 
  	? acc.concat(val.reduce((acc2, val2) => acc2.concat(val2),[])); 
  	: acc.concat(val),[]);
}

var array1 = [7,8,9,[4,5,6,[1,2,3]],10];
var flat = flattenArrOnce(array1);
console.log(flat);
flat = flattenALL(array1);
console.log(flat);
