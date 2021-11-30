// Priority Function
async function priority(from, into, wait){

    console.log("Priority algorithm called...") // System Call

    var highestPriority = -1.7976931348623157E+10308; 
    var index;

    for(var i = 0; i <from[0].length; i++){
        // console.log(from[0][i])
        if(from[0][i] == 0){
            continue;
        }else{
            if(from[0][i][1] > highestPriority){
                // console.log("Entered")
                highestPriority = from[0][i][1];
                index = i;
            }
        }        
    }

    var x = from[0][index][2]
    from[0][index] = 0;

    // Unpack processes from the job selected from the bacth array into the ready queue and adds wait time
    for(var j = 0; j < x.length; j++){
        for(var i = 0; i < into[0].length; i++){
            if(into[0][i] == 0){
                x[j].o = order++;
                x[j].w = x[j].w + wait;
                into[0][i] = x[j];
                animateMove(from[1], i, into, index);
                break;                
            }
            
        }
    }

    werwed = 0
    // Unlocks dispatchers
    lock = false;
    block = false;
    midlock = false;
}