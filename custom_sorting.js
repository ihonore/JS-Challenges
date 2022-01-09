function sortArray(arr){
    //This function determines if a given number is prime or not
    function isPrime(n){
        if(n<=1){
            return false;
        }
        else{
            for(let i=2;i<=Math.sqrt(n);i++){
                if(n%i==0){
                    return false;
                }
            }
            return true;
        }   
    }
    //Removing prime numbers from the array
    for(let i=0;i<arr.length;i++){
        if(isPrime(arr[i])){
            arr.splice(i,1); 
        }
    }

    //Sorting rest of the array
    for(let i=0;i<arr.length;i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]<arr[j]){
               let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }

        }
    }

return arr;
    
}
console.log(sortArray([8,68,25,5,9,7,40,100,42,4,13]));