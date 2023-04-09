


let arr = ["scale", "happy", "strength", "peace", "happy", "happy"];

//foreach 
function removeDuplicates(arr){
let unique = [];

arr.forEach(element => {
    if(!unique.includes(element)){
        unique.push(element)
    }
    
});
return unique;

}

//filter with index 

function removeDuplicates(arr) {
    return arr.filter((item, index) => {
        console.log('item', item)
        return arr.indexOf(item) === index
    });
}

console.log(removeDuplicates(arr));
