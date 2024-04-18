//I think I need to swap the inner loop with the outer loop
// function mergesort(array) {
//     let h = Math.ceil(Math.log2(array.length));
//     for(let j = array.length; j > 1; j = Math.ceil(j/2)){
//         for(let i = 0; i < h; i++){

//         }
//         h--;
//     }
// }

function mergesort(array){
    let h = Math.ceil(Math.log2(array.length));
    for(let i = 0; i < h; i++){
        console.log(i);
        for(let j = array.length; j > 0; j -= 2){
            // console.log(j);
            if(array[j - 1] < array[j - 2]){
                swap(array, j - 1, j - 2);
            }
        }
        // h--;
    }
    return array;
}

function swap(arr, index1, index2){
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
    return arr;
}

let array = [8,2,4,5,7,1,6,3];
console.log(mergesort(array));
