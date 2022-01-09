function nestObject(arr){
    let myObj={};
    for(let i=0; i<arr.length; i++){
        let tempArr=arr[i].split(",");
        let age=tempArr[1].match(/[0-9]/g).join('');
        age=Number(age);
        let firstName=tempArr[0].split(" ")[0];
        let secondName=tempArr[0].split(" ")[1];
        myObj[firstName]={second_name : secondName, age:age}; 
    }

    return myObj; 
}
console.log(nestObject(["Patrick wyne, 30", "lil wyne, 32","Eric mimi, 21","Dodos deck, 21"]));