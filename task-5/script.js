function deepClone(obj){
    let cloneObj = Array.isArray(obj)?[]:{};
    for(let key in obj){
        if(typeof obj[key] !== 'object' || obj[key] === null){
            cloneObj[key] = obj[key];
        }else{
            cloneObj[key] = deepClone(obj[key])
        }
    }
    return cloneObj;
}
let obj = {
    username: "Amar",
    age: 20,
    language:null,
    list: [1,2,3,3,4],
    Address:{
        city:"Jaunpur",
        pincode:222002
    }
}
let cloneObj = deepClone(obj);
cloneObj.username = "Chandan";
console.log("original obj: ",obj);
console.log("clone obj: ",cloneObj);

