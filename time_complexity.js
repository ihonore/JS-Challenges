function checkMajority(arr){
    let length=arr.length;
    let count;
    let majorityElement;
    for(let i=0; i<length;i++){
        count=0;
        for(let j=0;j<length;j++){
            if(arr[i]==arr[j]){
                majorityElement=arr[i];
                count++;
            }
        }

        if(count>length/2){
            return `The majority element is: ${majorityElement} with ${count} occurences`;
        }
    }
    return `There is no majority element in given array`;
}
let startTime=0;
let endTime=0;
startTime=performance.now();
console.log(checkMajority([2,2,2,5,1]));
endTime=performance.now();
console.log(`elapsed time: ${endTime-startTime} milliseconds`);