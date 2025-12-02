let arr = [1,4,5,7,9,2,3,6,8,10];

arr.sort((a, b) => a - b);  

let targetSum = 12;

let pointer1 = 0;
let pointer2 = arr.length - 1;

while (pointer1 < pointer2) {
    let currentSum = arr[pointer1] + arr[pointer2];
    
    if (currentSum === targetSum) {
        console.log(`Pair found: (${arr[pointer1]}, ${arr[pointer2]})`);
        break;
    } 
    else if (currentSum < targetSum) {
        pointer1++;
    } 
    else {
        pointer2--;
    }
}
