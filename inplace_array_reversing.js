function inPlaceReverse(arr){
    let length=arr.length;
    for(let i=0; i<arr.length/2; i++){
        let temp=arr[i];
        arr[i]=arr[length-i-1];
        arr[length-i-1]=temp;
    }
    return arr;
}
console.log(inPlaceReverse([1,2,3,4,5,12,90]));
