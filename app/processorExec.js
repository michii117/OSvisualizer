async function processorAction(type){
    

    var swap = 1;
    
    document.getElementById("processorlabel").classList.add("active") // Turns processor text color to active on screen
    updateProcessorTable() // updates processor table

    var subtract = setInterval( async () => {

        if(vlock == false){ // Pauses and plays the visualizer

            processor[0][0].s = processor[0][0].s - 1 // Reduce expected execution time
            processor[0][0].e = processor[0][0].e + 1 // Increase time executed
            processor[0][0].content[1] = processor[0][0].content[1] - 1 // reduced time till interrupt
            
            console.log("Processor processing: " + processor[0][0].ID); // System Call
            console.log("Time remaining: " + processor[0][0].s); // System Call
                    
            updateProcessorTable()

            if(processor[0][0].content[0] == 1){
                console.log("Time till interrupt: " + processor[0][0].content[1]) // System Call
            }
            
            // if type is pre and the if swap equals to time slice given run code
            if(type == "pre" && processor[0][0].s > 0 && swap == document.getElementById("timeslicevalue").value){ // pre-emptive time slicing controller

                console.log("Time slice limit reached...") // System Call
                var val = processor[0].pop()

                for(var i = 0; i < readyArray[0].length; i++){ // find an empty space in the read array and place the swapped process back into the array
                    if(readyArray[0][i] == 0){
                        readyArray[0][i] = val;
                        await animateMove(processor[1], i, readyArray, 0);
                        break;
                    }                
                }
                
                document.getElementById("processorlabel").classList.remove("active")
                clearInterval(subtract); // end processor action

            }else if(processor[0][0].content[1] == 0 && processor[0][0].content[0] == 1){ //Interupt handler checks if interrupt time equals zero and the process has an I/O call

                console.log("Interrupt called on " + processor[0][0].ID + "...") // System Call
                interrupt = document.getElementById("interruptTimevalue").value // checks the length of the interrupt time
                var val1 = processor[0].pop() // removes process from processor
                clearProcessorTable() // updates processor table

                //
                for(var i = 0; i < blockArray[0].length; i++){
                    if(blockArray[0][i] == 0){
                        
                        blockArray[0][i] = val1;
                        await animateMove(processor[1], i, blockArray, 0);
                        document.getElementById("os-title3").classList.add("active") // turns on active color for I/O subsystem in the visualizer
                        document.getElementById("processorlabel").classList.remove("active")
                        clearInterval(subtract); // stops processor
                        break;
                    }                
                } 

            }else if(processor[0][0].s<=0){ // Process completed

                updateProcessorTable() // Update processor table
                console.log(processor[0][0].ID + " finished processing...") // System Call

                processor[0].pop()

                if(countSpace(readyArray[0]) == 12 && countSpace(suspendedArray[0]) && countSpace(batchArray[0]) && countSpace(blockArray[0]) && processor[0].length == 0){ // No processes in system
                    
                    clearProcessorTable()
                }
                document.getElementById("processorlabel").classList.remove("active")
                clearInterval(subtract);
            }
            swap++
        }
    }, 1000);
    
    clearProcessorTable()
    swap = 1;
    
}


function updateProcessorTable(){
    if(processor[0][0] != 0 || processor[0][0].length != 0){
        output = `<tr><td>0</td><td>${processor[0][0].ID}</td><td>${processor[0][0].s}</td><td>${processor[0][0].e}</td><td>${processor[0][0].w}</td><td>${processor[0][0].content[0]}</td><tr>`
    }
    
    processorData.innerHTML = output // update processor table
}


function clearProcessorTable(){
    output = `<tr><td>0</td><td> </td><td> </td><td> </td><td> </td><td> </td><tr>`
    processorData.innerHTML = output // clear processor information from processor table
}