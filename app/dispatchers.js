var allowNum = 12;
var processor = [[],"processor"];
var lock = false;
var block = false;
var midlock = false;
var algotype
var output= "";
var routput= "";
var boutput= "";
var joutput= "";
var soutput= "";
var lastworkingW;



var running = setInterval(async () => {


    // Update Batch Job Table

    if(vlock == true){
        for(var i = 0; i < batchArray[0].length; i++){
            if(batchArray[0][i] != 0){ 
                joutput = `<tr><td>${i}</td><td>${batchArray[0][i][0]}</td><td>${batchArray[0][i][2].length}</td><td>${batchArray[0][i][1]}</td><td>${batchArray[0][i][3]}</td><tr>`;
                batchData[i].innerHTML = joutput; // Updates the batch job table
            }else{
                joutput = `<tr><td>${i}</td><td> </td><td> </td><td> </td><td> </td><tr>`;
                batchData[i].innerHTML = joutput; // If batch queue had no jobes it clears the table
            }
        }
    }


    if(vlock == false){ // Pauses and plays the visualizer

        document.getElementById("os-title5").classList.add("active") // Turns on Synthonization
        document.getElementById("os-title4").classList.add("active") // Turns on OS architecture 
        algotype = document.getElementById("algo").value; // Checks the selection algorithm chosen


        // Increments a time spent waiting variable for the batch  
        for(var i = 0; i < batchArray[0].length; i++){
            if(batchArray[0][i] != 0){ // Checks if batch queue is empty
                batchArray[0][i][3] = batchArray[0][i][3] + 1; // Increments w of the job
                lastworkingW = batchArray[0][i][3]
                joutput = `<tr><td>${i}</td><td>${batchArray[0][i][0]}</td><td>${batchArray[0][i][2].length}</td><td>${batchArray[0][i][1]}</td><td>${batchArray[0][i][3]}</td><tr>`;
                batchData[i].innerHTML = joutput; // Updates the batch job table
            }else{
                joutput = `<tr><td>${i}</td><td> </td><td> </td><td> </td><td> </td><tr>`;
                batchData[i].innerHTML = joutput; // If batch queue had no jobes it clears the table
            }
        }
    
        // Increments the wait time of each process in the backlog
        if(backlog.length != 0){ 
            for(var i = 0; i < backlog.length; i++){
                backlog[i][3] = backlog[i][3] + 1;
            }
        }

        // Update Ready Queue Table
        for(var i = 0; i < readyArray[0].length; i++){ // Iterates through each value in the ready queue

            if(readyArray[0][i] != 0){ // if values in the position in the ready queue is not 0 a process is present
                readyArray[0][i].w = readyArray[0][i].w + 1 // the system incremements the wait time of the process in that position
                readyArray[0][i].o = readyArray[0][i].o + 1
                routput = `<tr><td>${i}</td><td>${readyArray[0][i].ID}</td><td>${readyArray[0][i].priority}</td><td>${readyArray[0][i].s}</td><td>${readyArray[0][i].e}</td><td>${readyArray[0][i].w}</td><td>${readyArray[0][i].o}</td><tr>`
                readyData[i].innerHTML = routput; // The system updates the ready queue table
            }else{
                routput = `<tr><td>${i}</td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><tr>`
                readyData[i].innerHTML = routput; // The value is 0 the system clears that position in the table
            }
        }

        // Short-term dispatcher selection code 

        if(!isEmpty(readyArray[0]) && processor[0].length == 0 && lock==false){ // Checks if ready array is not empty and processor is empty and the system isnt currently running another process 
            block = true; // locks the system from long term process
            lock = true; // locks the system from short term process
            midlock = true; // locks the system from medium term process
            
            console.log("Short-term dispatcher activated..."); // System Call
            console.log("Short-Term Scheduling..."); // System Call
            selectAlgo(algotype, readyArray, processor, 0); // Selects a sheduling algorythm for the system to run

        }

        suspendedAction();   
        // Medium-term dispatcher selection code 

        if(countSpace(suspendedArray[0]) != 12 && countSpace(readyArray[0]) > 2 && midlock == false){
            block = true;
            lock = true;
            midlock = true;

            console.log("Medium-term dispatcher activated..."); // System Call
            console.log("Medium-Term Scheduling..."); // System Call
            selectAlgo(algotype, suspendedArray, readyArray, 0);
        }


        // Long-term dispatcher selection code    
            
        if(isEmpty(batchArray[0]) == false && isFull(readyArray[0]) == false && block==false && countSpace(readyArray[0]) > 6 && countSpace(suspendedArray[0]) == 12){
            block = true;
            lock = true;     
            midlock = true;  
            
            console.log("Long-term dispatcher activated..."); // System Call
            console.log("Long-Term Scheduling..."); // System Call

            selectAlgo("priority", batchArray, readyArray, lastworkingW);
        }

        

        
        blockedAction();

        // checks if blocked array is empty and changes the colour to inactive on the I/O subsystem
        if(countSpace(blockArray[0]) == 12){ 
            // console.log("Block Array Populated")
            document.getElementById("os-title3").classList.remove("active")
        }

        // Check for any processes or jobs running in the system by checing if al arrays are empty
        if(countSpace(readyArray[0]) == 12 && countSpace(suspendedArray[0]) && countSpace(batchArray[0]) && countSpace(blockArray[0]) && processor[0].length ==0){
            console.log("System Waiting on job...")

            // Turn of other OS parts
            document.getElementById("os-title3").classList.remove("active")
            document.getElementById("os-title1").classList.remove("active")
            document.getElementById("os-title6").classList.remove("active")
        }

        // Checks if backlog has waiting jobs and there is space in the batcch array to accept them 
        if(countSpace(batchArray[0]) > 0 && backlog.length > 0){
            var pushJob = backlog.splice(0, 1)[0] // removes job from backlog
            console.log("Job removed from backlog: " + pushJob[0]) // System Call

            for(i=0; i< batchArray[0].length; i++){ // Iterrates through the batch queue
                if (batchArray[0][i] == 0){ // finds a free array space in the batch queue to place the job

                    console.log("Job added to batch Queue: " + pushJob[0])

                    batchArray[0][i] = pushJob; // aAnds the job to the batch queue
                    batchJobs[i].innerHTML = `<img src='images/process.png' class='processImg' id="${pushJob[0].ID}">` // animates addition of job
                    break;               
                }
            }
        }
    }
    
    
}, 1000);




function suspendedAction(){

    // Updates wait time of process in the suspended queue and updats suspended array table
    for(var i = 0; i < suspendedArray[0].length; i++){
        if(suspendedArray[0][i] != 0){
            suspendedArray[0][i].w = suspendedArray[0][i].w + 1;
            console.log("Suspended table should be updating")
            soutput = `<tr><td>${i}</td><td>${suspendedArray[0][0].ID}</td><td>${suspendedArray[0][0].s}</td><td>${suspendedArray[0][0].e}</td><td>${suspendedArray[0][0].w}</td><tr>`
            susData[i].innerHTML = soutput
        }else{
            soutput = `<tr><td>${i}</td><td> </td><td> </td><td> </td><td> </td><tr>`
            susData[i].innerHTML = soutput
        }
    }

}

