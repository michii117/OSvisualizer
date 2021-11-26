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
var werwed = 0;




var dispatcherRunning = setInterval(function running () {

    algotype = document.getElementById("algo").value;

    // Update Ready Queue Table

    for(var i = 0; i < readyArray[0].length; i++){

        if(readyArray[0][i] != 0){
            readyArray[0][i].w = readyArray[0][i].w + 1
            routput = `<tr><td>${i}</td><td>${readyArray[0][i].ID}</td><td>${readyArray[0][i].priority}</td><td>${readyArray[0][i].s}</td><td>${readyArray[0][i].e}</td><td>${readyArray[0][i].w}</td><tr>`
            readyData[i].innerHTML = routput;
        }else{
            routput = `<tr><td>${i}</td><td> </td><td> </td><td> </td><td> </td><td> </td><tr>`
            readyData[i].innerHTML = routput;
        }
    }


    // Update Batch Job Table

    for(var i = 0; i < batchArray[0].length; i++){
        if(batchArray[0][i] != 0){
            batchArray[0][i][3] = batchArray[0][i][3] + 1;
            joutput = `<tr><td>${i}</td><td>${batchArray[0][i][0]}</td><td>${batchArray[0][i][2].length}</td><td>${batchArray[0][i][1]}</td><td>${batchArray[0][i][3]}</td><tr>`;
            batchData[i].innerHTML = joutput;
        }else{
            joutput = `<tr><td>${i}</td><td> </td><td> </td><td> </td><td> </td><tr>`;
            batchData[i].innerHTML = joutput;
        }
    }


    // Short-term dispatcher selection code 

    if(!isEmpty(readyArray[0]) && processor[0].length == 0 && lock==false){
        block = true;
        lock = true;
        midlock = true;
        
        console.log("Short-term dispatcher activated..."); // System Call
        console.log("Short-Term Scheduling..."); // System Call
        selectAlgo(algotype, readyArray, processor);

    }

        
    // Medium-term dispatcher selection code 

    if(countSpace(suspendedArray[0]) != 12 && countSpace(readyArray[0]) > 2 && midlock == false){
        block = true;
        lock = true;
        midlock = true;

        console.log("Medium-term dispatcher activated..."); // System Call
        console.log("Medium-Term Scheduling..."); // System Call
        selectAlgo(algotype, suspendedArray, readyArray);
    }


    // Long-term dispatcher selection code    
        
    if(isEmpty(batchArray[0]) == false && isFull(readyArray[0]) == false && block==false && countSpace(readyArray[0]) > 6 && countSpace(suspendedArray[0]) == 12){
        block = true;
        lock = true;     
        midlock = true;  
        
        console.log("Long-term dispatcher activated..."); // System Call
        console.log("Long-Term Scheduling..."); // System Call
        werwed = batchArray[0][0][3]
        selectAlgo("priority", batchArray, readyArray);
    }


    suspendedAction();
    blockedAction();


    if(countSpace(blockArray[0]) == 12){
        // console.log("Block Array Populated")
        document.getElementById("os-title3").classList.remove("active")
    }

    // Check For processes
    if(countSpace(readyArray[0]) == 12 && countSpace(suspendedArray[0]) && countSpace(batchArray[0]) && countSpace(blockArray[0]) && processor[0].length ==0){
        console.log("System Waiting on job...")

        // Turn of other OS parts
        document.getElementById("os-title3").classList.remove("active")
        document.getElementById("os-title1").classList.remove("active")
        document.getElementById("os-title6").classList.remove("active")
    }

    if(countSpace(batchArray[0]) > 0 && backlog.length > 0){
        var pushJob = backlog.splice(0, 1)[0]
        console.log("Job removed from backlog: " + pushJob[0]) // System Call

        for(i=0; i< batchArray[0].length; i++){
            if (batchArray[0][i] == 0){

                console.log("Job added to batch Queue: " + pushJob[0])

                batchArray[0][i] = pushJob;
                batchJobs[i].innerHTML = `<img src='images/process.png' class='processImg' id="${pushJob[0].ID}">`
                break;               
            }
        }
    }

    
}, 1000);




function suspendedAction(){

    if(countSpace(suspendedArray[0]) != 12){
        for(var i = 0; i < suspendedArray[0].length; i++){
            if(suspendedArray[0][i] != 0){
                suspendedArray[0][i].w = suspendedArray[0][i].w + 1;
                console.log("Suspended table should be updating")
                soutput = `<tr><td>${i}</td><td>${suspendedArray[0][0].ID}</td><td>${suspendedArray[0][0].s}</td><td>${suspendedArray[0][0].e}</td><td>${suspendedArray[0][0].w}</td><td>${suspendedArray[0][0].content[0]}</td><tr>`
                susData[i].innerHTML = soutput
            }
        }
    }

}
