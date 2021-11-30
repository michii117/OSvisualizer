function fcfs(from, into){
    
    console.log("FCFS algorithm called...") // System Call

    var first = -1.7976931348623157E+10308;
    var index = 0;

    // Finds earliest created process
    for(var i=0; i < from[0].length; i++){
        if(from[0][i] == 0){
            continue; // Skip if value is 0.
        }else{
            if(from[0][i].o > first){
                first = from[0][i].o;
                index = i;
            }
        }
                
    }
    
    // Remove selected process from current queue
    var x = from[0][index];
    from[0][index] = 0;

    // Moves process into the next queue
    mover(from, into, i, index, x, "non")
    
    // Unlocks short term dispatcher
    lock = false;
    block = false;
    midlock = false;
}