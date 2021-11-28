var interrupt;

async function blockedAction(){

    // Check if blockArray is empty
    if(countSpace(blockArray[0]) != 12){
       

        for(var i = 0; i < blockArray[0].length; i++){

            if(blockArray[0][i] != 0){
                
                // Update blocked table
                
                boutput = `<tr> <td>${i}</td> <td>${blockArray[0][i].ID}</td> <td>${blockArray[0][i].content[0]}</td> <td>${interrupt - blockArray[0][i].content[1]}</td> <td>${blockArray[0][i].w}</td><tr>`
                blockData[i].innerHTML = boutput

                blockArray[0][i].w = blockArray[0][i].w + 1;

                if(blockArray[0][i].content[1] == interrupt){

                    console.log(blockArray[0][i].ID + " interrupt completed...")

                    // Update blocked table

                    boutput = `<tr><td>${i}</td><td> </td><td> </td><td> </td><td> </td><tr>`
                    blockData[i].innerHTML = boutput

                    blockArray[0][i].content[0] = 0;
    
                    var popped = blockArray[0][i];
                    blockArray[0][i] = 0;

                    index = i;
    
                    for(var j = 0; j < suspendedArray[0].length; j++){
                        if(suspendedArray[0][j] == 0){
                            
                            suspendedArray[0][j] = popped;
                            await animateMove(blockArray[1], j, suspendedArray, index);
                            break;
                        }
                    } 
    
                }else{

                    console.log(blockArray[0][i].ID + " interrupt processing...") // System Call
                    blockArray[0][i].content[1] = blockArray[0][i].content[1] + 1;
                    console.log("Time till interrupt completed: " + (interrupt - blockArray[0][i].content[1])) // System Call
                }
                
            }
            
        }

    }
     
}