function AddDynamic(...args){
    return args.reduce((acc,num)=>(acc+num),0)
}
console.log(AddDynamic(1,2,3,4,4,3))