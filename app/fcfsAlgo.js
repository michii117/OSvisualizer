function fcfs(from, into){
    
    var first = 1.7976931348623157E+10308;
    var index = 0;

    for(var i=0; i < from[0].length; i++){
        if(from[0][i] == 0){
            continue;
        }else{
            if(from[0][i].o < first){
                first = from[0][i].o;
                index = i;
            }
        }
                
    }
    
    // Remove selected process from current queue
    var x = from[0][index];
    // console.log("problem: " + x)
    from[0][index] = 0;

    
    
    // Moves process into the next queue
    if(into[1] == "processor"){        
        animateMove(from[1], i = 0, into, index);
        processorAction(x, "non");                
    }else{
        for(var i = 0; i < into[0].length; i++){
            if(into[0][i] == 0){
                into[0][i] = x;
                // console.log("problem: " + from[1] + " ans: " + from[0])
                // console.log("problem: " + into[1] + " ans: " + into[0])
                animateMove(from[1], i, into, index);
            }
            
        }
    }
    
    // Unlocks short term dispatcher
    lock = false;
    block = false;
}