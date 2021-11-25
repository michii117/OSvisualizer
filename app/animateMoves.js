function animateMove(from, i, into, index){
    switch(from){
        case "ready":
            // Removes from processor            
            // console.log("ready")
            setTimeout(() => {readyQueue[index].innerHTML = "";}, 1000);
            break;

        case "batch":        
            // console.log("Animate from batch to ready")    
            batchJobs[index].innerHTML = "";
            setTimeout(() => {readyQueue[i].innerHTML = `<img src='images/process.png' class='processImg' id="${into[0][i].ID}">`}, 1000);
            break;

        case "processor":        
            // console.log("Animate move from processor to ready") 
            setTimeout(() => {readyQueue[i].innerHTML = `<img src='images/process.png' class='processImg' id="${into[0][i].ID}">`}, 1000);
            break;
            
    }
}