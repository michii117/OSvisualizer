function selectAlgo(type, from, into){
    switch(type){
        case "srt":
            console.log("srt algorithm called")
            srt(from, into);
            break;
        case "spn":
            spn(from, into);
            break;
        case "fcfs":
            fcfs(from, into);
            break;
        case "hrrn":
            hrrn(from, into);
            break;
        case "priority":
            priority(from, into);
    }
}


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

