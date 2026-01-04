// var maxProfit = function(prices) {
//     let min = Infinity;
//     let profit = 0;

//     for (let price of prices) {
//         min = Math.min(min, price);
//         profit = Math.max(profit, price - min);
//     }
//     return profit;
// };
// write me output of sum of array 



function anagram (a1,a2){
    
    a1 = a1.split('').sort().join('')
    a2 = a2.split('').sort().join('')
    return a1 === a2;

}

const a1 = "file";
const a2 = "life";

if(anagram(a1,a2)){
    console.log(true)
}
else{
    console.log(false)
}

 