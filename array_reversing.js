function reverseArray(arr){
    let reversedArr=[];
    for(let i=arr.length-1; i>=0; i--){
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
console.log(reverseArray([1,2,3,4,5]));