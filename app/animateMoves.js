function animateMove(from, i, into, index){
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
            readyQueue[i].innerHTML = `<img src='images/process.png' class='processImg' id="${into[0][i].ID}">`
            break;
            
    }
}