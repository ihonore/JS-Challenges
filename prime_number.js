function primeNumbers(arr){
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
 //push every prime number to our new array
 let newArr=[];
 for(let i=0; i<arr.length;i++){
     if(isPrime(arr[i])){
         newArr.push(arr[i])
     }
 }
 return newArr;
}
console.log(primeNumbers([-1,1,2,3,5,7,8,9]));