const statues = [6, 2, 3, 8];

function res(arr){
    let base = arr
    arr.sort((a,b) => a-b);

    for (let i = 0; i < arr.length; i++) {
        let dif = arr[i+1] - arr[i];
        // dif -= 1
        if(dif-1){
            for (let j = 1; j < dif+1; j++) {
                let arr2 = [...arr,arr[i]+j]
                arr=arr2
                }             
            }
        } 
        const dataArr = new Set(arr);
        let result = [...dataArr];
        for (let j = 0; j < base.length; j++) {
            result=result.filter( num => num !== base[j]) 
        }
        result.sort((a,b) => a-b);
        return result.length
    }



function res2(arr){
    let sol=0;
    arr.sort((a,b) => a-b);
    for (let i = 0; i < arr.length; i++) {
        let dif = arr[i+1] - arr[i] -1;
        dif && (sol += dif)
    }
    return sol
}


console.log( res(statues) )
console.log( res2(statues) )