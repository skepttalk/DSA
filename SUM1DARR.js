let Arr = [1,2,3,4];


for(let i=1;i<Arr.length;i++){
    Arr[i]= Arr[i] + Arr[i-1];
    
}
console.log(Arr);