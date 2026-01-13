let Arr = [1,4,3,4,5,6,7];


for(let i=1;i<Arr.length;i++){
    Arr[i]= Arr[i] + Arr[i-1];

}
console.log(Arr);
