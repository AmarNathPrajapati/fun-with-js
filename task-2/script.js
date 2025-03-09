function debounce(func, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args)
        }, delay);
    }
}
function searchQuery(query){
    console.log("searching...",query);
}
const debounceSearch = debounce(searchQuery,1000);

const searchBox = document.getElementById('searchBox');
searchBox.addEventListener('input',(e)=>{
    debounceSearch(e.target.value)
})