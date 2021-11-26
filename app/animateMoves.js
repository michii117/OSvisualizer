async function animateMove(from, i, into, index){
    switch(from){
        case "ready":
            // Removes from processor            
            // console.log("ready")
            readyQueue[index].innerHTML = "";
            break;

        case "batch":        
            // console.log("Animate from batch to ready")    
            batchJobs[index].innerHTML = "";
            readyQueue[i].innerHTML = `<img src='images/process.png' class='processImg' id="${into[0][i].ID}">`
            break;

        case "processor":        
            // console.log("Animate move from processor to ready") 
            if(into[1] == "ready"){
                readyQueue[i].innerHTML = `<img src='images/process.png' class='processImg' id="${into[0][i].ID}">`
            }else if(into[1] == "block"){
                // console.log(blockArray)
                // console.log("Animate blockarray")
                // console.log(blockedQueue[i])
                blockedQueue[i].innerHTML = `<img src='images/process.png' class='processImg2' id="${into[0][i].ID}">`
            }
            
            break;

        case "block":        
            // console.log("Animate move from blocked to suspended") 
            // console.log(blockArray)
            // console.log(suspendedArray)
            // console.log("Animate blockarray")
            blockedQueue[index].innerHTML = "";

            suspendedQueue[i].innerHTML = `<img src='images/process.png' class='processImg2' id="${into[0][i].ID}">`
            await setTimeout(() => {
                console.log(suspendedQueue[i])
                console.log("Delay animate suspended Queue")
            },2000)
            break;

        case "readySus":        
            // console.log("Animate move from blocked to suspended") 
            // console.log(blockArray)
            // console.log(suspendedArray)
            // console.log("Animate blockarray")
            suspendedQueue[index].innerHTML = "";
            readyQueue[i].innerHTML = `<img src='images/process.png' class='processImg' id="${into[0][i].ID}">`
            
            break;
            
    }
}