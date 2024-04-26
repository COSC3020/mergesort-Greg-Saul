function mergesort(array) {
    if(array.length < 2){
        return array;
    }
    // console.log(array.length)
    for(let size = 1; size < array.length; size *= 2){ //size is the size of the "sub arrays" //logn times
        //  console.log("size: " + size)
        for(let start = 0; start < array.length; start += size * 2){ // n times
            // console.log(start)
            let mid = Math.min(start + size - 1, array.length - 1);
            var end = Math.min(start + 2 * size - 1, array.length - 1);
            merge(array, start, mid, end);
        }
    }
    return array;
}

function merge(arr, s, m, e){
    let s2 = m + 1; // start of array 2
 
    if (arr[m] <= arr[s2]) // already sorted for the first 2
    {
        return;
    }
 
    while (s <= m && s2 <= e) // n
    {
        if (arr[s] <= arr[s2])
        {
            s++;
        }
        else
        {
            let value = arr[s2];
            let index = s2;
            while (index != s) 
            {
                arr[index] = arr[index - 1];
                index--;
            }
            arr[s] = value;
            s++;
            m++;
            s2++;
        }
    }
}


//  let arr = [8,73,2,4,0,5,987,2,709,8,4758,9,768,95,79,8,27,4];
//   console.log(arr);
//  console.log(mergesort(arr));
//   console.log(arr);



// This was my attempt to get the correct amount of iterations. I think that my biggest issue is that the loops are nested in the wrong order. These never worked out for me so I had to look online

// function mergesort(array) {
//     return array;
//     let h = 0;
//     for(let j = array.length; j > 1; j = Math.ceil(j/2)){
//         for(let i = 0; i < Math.ceil(Math.log2(array.length)); i++){
//              put merge call here
//         }
//     }
// }
