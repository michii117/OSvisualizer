genJob.addEventListener("click", async (e)=>{

    // e.preventDefault();

    


    numOfProcesses = generaterandomNumber(1, 7);
    //console.log(numOfProcesses)
    const job = ["jobID"+jobID++, generaterandomNumber(1, 5),[],0]
    

    for(i=0; i< numOfProcesses; i++){
        se = generaterandomNumber(6, 31)

        const process = {ID: "processID"+id++, s: se, priority: generaterandomNumber(1, 5), content: [generaterandomNumber(0, 2)], e: 0, w: 0, o:order++};
        
        if(process.content[0] == 1){
            process.content.push(generaterandomNumber(1, se-3))
        }
        
        job[2].push(process)       
    }









    // console.log(countSpace(batchArray[0]))

    for(i=0; i< batchArray[0].length; i++){
        if (batchArray[0][i] == 0){
            batchArray[0][i] = job;
            batchJobs[i].innerHTML = `<img src='images/process.png' class='processImg' id="${job[0].ID}">`
            break;               
        }
    }      

    //console.log(batchArray)
    
});
