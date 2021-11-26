// Priority Function
async function priority(from, into){

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

    // await setTimeout(()=>{console.log("short delay...")},2000)
    var x = from[0][index][2]
    // console.log("problem: " + x)
    from[0][index] = 0;
    for(var j = 0; j < x.length; j++){
        for(var i = 0; i < into[0].length; i++){
            if(into[0][i] == 0){
                x[j].w = x[j].w + werwed;
                into[0][i] = x[j];
                animateMove(from[1], i, into, index);
                break;
                // console.log("problem: " + from[1] + " ans: " + from[0])
                // console.log("problem: " + into[1] + " ans: " + into[0])
                
            }
            
        }
    }
    werwed = 0

    // console.log(into)
    // console.log(from)
    // console.log(allowNum)
    // Unlocks short term dispatcher
    lock = false;
    block = false;
    midlock = false;
}