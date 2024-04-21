//This code is heavily influenced by https://github.com/COSC3020/mergesort-ZachRenz/blob/main/code.js 
//especially the nested for loops and for other cases where I got very stuck

function mergesort(array) {
    if(array.length < 2){
        return array;
    }

    for(i = 0, j = 1, sizeToMerge = 2; sizeToMerge < 2 * array.length; i = 0, j = sizeToMerge, sizeToMerge *= 2){
        for(; j < array.length; i += sizeToMerge, j += sizeToMerge){
            merge(sizeToMerge, i, j, array);
        }
    }

    return array;
}

function merge(size, i, j, arr){
    let merged = false;
    while(merged == false){
        if(i == j)
            merged = true;
        else if(arr[i] <= arr[j])
            i++;
        else if(arr[i]>arr[j]){
            let k = j + 1;
            while(arr[k] < arr[i] && k <= (j - 1 + size)){
                k++;
            }
            k--;
            swap(arr,i,k);
        }
    }
}

function swap(a,i,k){
    let tmp = a[k];
    a[k] = a[i];
    a[i] = tmp;
}


//   let arr = [8,73,2,4,0,5,987,2,709,8,4758,9,768,95,79,8,27,4];
//   console.log(arr);
//   mergesort(arr);
//   console.log(arr);
  
