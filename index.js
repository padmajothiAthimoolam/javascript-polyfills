//Map Functionality

const arr = [1,2,3,4,5];

const tempArray= arr.map((value)=> value *2);

console.log("Output of map function", tempArray);


//polyfills for map

Array.prototype.myMap = function(cb) {
    let tempArray1 = [];
    for(let index =0; index < this.length; index++){
        tempArray1.push(cb(this[index], index, this))
    }
    return tempArray1;
}

const tempArray1 = arr.myMap((el)=> el * 2);
console.log("Output of map polyfills", tempArray1);

//foreach functionality

arr.forEach((el)=> console.log(el));

//Polyfills for forEach

Array.prototype.myForEach = function(cb) {
   for(index =0 ; index < this.length; index++){
    cb(this[index], index, this);
   }
}

arr.myForEach((el) => console.log(el))