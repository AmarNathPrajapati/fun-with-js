let arr = [1,[1,2,3],[1,2,3,[1,2,3,[2,3,4]]]];
function flatArr(arr){
    let size = arr.length;
    let sum = 0;
    for(let i = 0; i<size; i++){
        if(Array.isArray(arr[i])){
            sum += flatArr(arr[i]);
        }else{
            sum +=arr[i]
        }
    }
    return sum;
}
console.log(flatArr(arr));