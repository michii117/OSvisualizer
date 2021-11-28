async function animateMove(from, i, into, index){
    switch(from){
        case "ready":
            
            console.log("Move " + into[0][i].ID + " from ready to processor...") // System Call
            console.log("Animate move...") // System Call

            readyQueue[index].innerHTML = "";
            break;

        case "batch":        

            console.log("Move " + into[0][i].ID + " from batch to ready queue...") // System Call
            console.log("Animate move...") // System Call

            batchJobs[index].innerHTML = "";
            readyQueue[i].innerHTML = `<img src='images/process.png' class='processImg' id="${into[0][i].ID}">`
            break;

        case "processor":      
          
            if(into[1] == "ready"){

                console.log("Move " + into[0][i].ID + " from processor to ready queue...") // System Call
                console.log("Animate move...") // System Call

                readyQueue[i].innerHTML = `<img src='images/process.png' class='processImg' id="${into[0][i].ID}">`
            }else if(into[1] == "block"){
                
                console.log("Move " + into[0][i].ID + " from processor to blocked queue...") // System Call
                console.log("Animate move...") // System Call

                blockedQueue[i].innerHTML = `<img src='images/process.png' class='processImg2' id="${into[0][i].ID}">`
            }
            
            break;

        case "block":        

            console.log("Move " + into[0][i].ID + " from blocked to suspended queue...") // System Call
            console.log("Animate move...") // System Call

            blockedQueue[index].innerHTML = "";
            suspendedQueue[i].innerHTML = `<img src='images/process.png' class='processImg2' id="${into[0][i].ID}">`
            
            break;

        case "readySus":        

            console.log("Move " + into[0][i].ID + " from suspended to ready queue...") // System Call
            console.log("Animate move...") // System Call

            suspendedQueue[index].innerHTML = "";
            readyQueue[i].innerHTML = `<img src='images/process.png' class='processImg' id="${into[0][i].ID}">`
            
            break;
            
    }
}