let btn = document.getElementById('btn');
function throttle(func, limit){
    let lastCall = 0;
    return function(...args){
        let now = Date.now();
        if(now-lastCall>limit){
            func(...args);
            lastCall = now;
        }
    }
}
function handleClick(){
    console.log("button click hua..."+ Date.now());
}
btn.addEventListener('click',throttle(handleClick,3000))