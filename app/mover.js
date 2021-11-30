
// Moves value from one queue into another 
function mover(from, into, i, index, x,type){
    if(into[1] == "processor"){     // if the the queue to move into is the processor run this code    
        processor[0].push(x); // adds process to processor
        animateMove(from[1], i = 0, into, index);
        processorAction(type);                
    }else{ // else run this code
        for(var i = 0; i < into[0].length; i++){ // find an emoty space in the queue
            if(into[0][i] == 0){
                into[0][i] = x; // moves process to empty index
                console.log("From: " + from[1] + " Into: " + into[1] + " i: " + i + " index: " + index) // system call
                animateMove(from[1], i, into, index);
                break;
            }
            
        }
    }
}