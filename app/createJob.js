let inps = [];
window.addEventListener("load", (e) =>{
    genJob.disabled = true;
    finc.disabled = true;
    var runt = true;
    var jpr = document.getElementById("jpriority");    
    var cpid = document.getElementById("id");     
    var cs = document.getElementById("s"); 
    var cp = document.getElementById("priority"); 
    var ccont = document.getElementById("typeProcess");
    inps = [cpid,cs,cp,ccont];
    inps.forEach(element => element.addEventListener("change", stateHandle));
    var cnumOfProcesses = 0;
    let cjob;
    genJob.addEventListener("click", async (e)=>{
        e.preventDefault();
        if(cnumOfProcesses == 0){
            cjob = ["jobID"+jobID++, generaterandomNumber(1, 5),[],0];
            runt = true;
        }else if(cnumOfProcesses >6){
            console.log("Max processes for this job reached!");
            runt = false;
        }
        if(runt){
            const process = {ID: "processID"+parseInt(cpid.value), s: parseInt(cs.value), priority: parseInt(cp.value), content: [ccont.value], e: 0, w: 0};
            if(process.content[0] == 1){
                process.content.push(generaterandomNumber(1, parseInt(cs.value)-3))
            }
            cjob[2].push(process)
            cnumOfProcesses++;
            console.log("Added process!");
            $("#createProcessForm")[0].reset();
            finc.disabled = false;
        }
        
    });

    finc.addEventListener("click",async (e) =>{
        e.preventDefault();
        if(countSpace(batchArray[0]) == 0){

            backlog.push(cjob)          
            console.log("Job added to backlog: " + cjob[0]) // System Call

        }else{
            for(i=0; i< batchArray[0].length; i++){
                if (batchArray[0][i] == 0){

                    console.log("Job added to batch Queue: " + cjob[0])

                    batchArray[0][i] = cjob;
                    batchJobs[i].innerHTML = `<img src='images/process.png' class='processImg' id="${cjob[0].ID}">`
                    break;               
                }
            } 
        
        }
        if(jpr.value!= ""){
            cjob[1] = parseInt(jpr.value);
        }

        runt = true;
        finc.disabled = true;
        cnumOfProcesses = 0;

        displayer()
    } );
});

function stateHandle() {
    if (inps.some(element => element.value == "")) {
        genJob.disabled = true;
    }else if(inps[1].value > 31 || inps[1].value < 5){
        genJob.disabled = true;
        console.log("Input invalid!");
        console.log("Service time must be between 6 and 30");
    }else if(inps[2].value < 1 || inps[2].value > 5 ){
        genJob.disabled = true;
        console.log("Input invalid!");
        console.log("priority must be between 1 and 5");
    }else{
        genJob.disabled = false;
    }

    if(jpr.value == ""){
        finc.disabled = true;
    }else{
        finc.disabled = false
    } 
}