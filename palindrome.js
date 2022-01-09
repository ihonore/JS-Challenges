function palindromeChecker(str){
    let newStr=str.slice().toLowerCase();
    str=str.toLowerCase();

    //Reversing a string
    let reversedStr="";
    for(let i=newStr.length-1; i>=0; i--){
        reversedStr+=newStr[i];
    }
    //checking if reversed string is same as actual string
    if(str==reversedStr){
        return true;
    }
    else {
        return false;
    }
}
console.log(palindromeChecker("dad"));
