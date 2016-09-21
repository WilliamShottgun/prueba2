
var arr1 = ['a','b','c',[2,3]];
var arr2 = arr2 = JSON.parse(JSON.stringify(arr1));



function copy(o) {
   var output, v, key;
   output = Array.isArray(o) ? [] : {};
   for (key in o) {
       v = o[key];
       output[key] = (typeof v === "object") ? copy(v) : v;
   }
   return output;
}