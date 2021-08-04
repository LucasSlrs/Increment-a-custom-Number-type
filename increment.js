// Not sure if I understand the question very well, but I have an array of numbers. I have to increment them by one in the range of [0,9]. If a number is 9, it will pass to 0.
// forEach element of the array I push new numbers into result.
function increment(arr) {
    let result = [];
    arr.forEach(element => { 
        if(element < 9) {
            element++;
        } else {
            element = 0;
        }
        result.push(element);
        return console.log(result);
    });
}
let array = [9,7,8,5,2];
increment(array);