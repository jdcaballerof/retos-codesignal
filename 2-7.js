const array0 = [1, 3, 2, 1]     // False
const array1 = [1, 3, 2]        // Verdad
const array2 = [3, 1, 2]        // Verdad
const array3 = [1, 2, 1, 2]     // false
const array4 = [3, 6, 5, 8, 10, 20, 15]     // false
const array5 = [10, 1, 2, 3, 4, 5]          // Verdad
const array6 = [3, 6, 5, 8, 10, 20, 15]     // false
const array7 = [1, 2, 3, 4, 3, 6]           // true


function solutionMine(seq){
    let respuesta = true
    let respuesta1 = true
    let respuesta2 = true
    let con1 = 0
    let con2 = 0
    const seq1 = [...seq]
    const seq2 = [...seq]

    for (let i = 0; i < seq1.length; i++) {
        if(seq1[i] >= seq1[i+1]){
            seq1.splice(i,1)
            con1 +=1
        }
    }
    for (let i = 0; i < seq1.length; i++) {
        if(seq1[i] >= seq1[i+1]){
            respuesta1=false
        }
    }
    if(con1>1) respuesta1 = false
    

    for (let i = 0; i < seq2.length; i++) {
        if(seq2[i] >= seq2[i+1]){
            seq2.splice(i+1,1)
            con2 +=1
        }
    }
    for (let i = 0; i < seq2.length; i++) {
        if(seq2[i] >= seq2[i+1]){
            respuesta2=false
        }
    }
    if(con2>1) respuesta2 = false

    respuesta = respuesta1 || respuesta2

    return { seq1, con1, respuesta1, seq2, con2, respuesta2, respuesta }
}

const {seq1, con1, respuesta1, seq2, con2, respuesta2, respuesta} = solutionMine(array7)

console.log( {seq1, con1, respuesta1} )
console.log( {seq2, con2, respuesta2} )
console.log( respuesta )

// sol de comunidad
function solution1(seq) {
    var bad=0
    for(var i=1;i<seq.length;i++) {
        if(seq[i]<=seq[i-1]) {
            bad++
            if(bad>1) return false
            if( seq[i]<=seq[i-2] && seq[i+1]<=seq[i-1] ) return false
        }
    }
    return true
}

console.log( solution1(array0) )


