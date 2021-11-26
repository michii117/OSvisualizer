// check if array is empty
function isEmpty(arr){
    for(i=0; i < arr.length; i++){
        if (arr[i] != 0){
            return false;
        }
    }
    
    return true
}


function isFull(arr){
    for(i=0; i < arr.length; i++){
        if (arr[i] == 0){
            return false;
        }
    }
    
    return true
}


function countSpace(arry){
    var count = 0;
    for(i=0; i<arry.length; i++){
        if(arry[i]==0){
            count++
        }
    }

    return count;
}
