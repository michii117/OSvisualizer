//HRRN ALGORITHM

function hrrn(from, into){
    
    console.log("HRRN algorithm called...") // System Call

    var largest = -1.7976931348623157E+10308;
    var index = 0;

    for(var i=0; i < from[0].length; i++){
        if(from[0][i] == 0){
            continue;
        }else{

            var hrrn = (from[0][i].s + from[0][i].w) / from[0][i].s; // calculates the hrrn ratio for the process
            console.log("ID " + from[0][i].ID + ": " + hrrn) // HRRN Proof
            
            // if the current process ratio is larger than the value saved in largest replace largest with new hrrn value and the index of the process
            if(hrrn > largest){
                largest = hrrn
                index = i;
            }
        }
                
    }
    
    console.log("Selected Process: " + from[0][index].ID + " HRRN: " + largest) // System call HRRN Proof

    // Remove selected process from current queue
    var x = from[0][index]
    from[0][index] = 0;

    // Moves process into the next queue
    mover(from, into, i, index, x, "non")
    
    // Unlocks all dispatchers
    lock = false;
    block = false;
    midlock = false;
    
}


