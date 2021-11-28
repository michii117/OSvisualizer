
//SRT ALGORITHM

function spn(from, into){

    console.log("SPN algorithm called...") // System Call
    
    var shortest = 1.7976931348623157E+10308;
    var index = 0;

    for(var i=0; i < from[0].length; i++){
        if(from[0][i] == 0){
            continue;
        }else{
            if(from[0][i].s < shortest){
                shortest = from[0][i].s
                index = i;
            }
        }
                
    }
    
    // Remove selected process from current queue
    var x = from[0][index]
    from[0][index] = 0;

    // Moves process into the next queue
    mover(from, into, i, index, x, "non")
    
    // Unlocks short term dispatcher
    lock = false;
    block = false;
    midlock = false;

    
}