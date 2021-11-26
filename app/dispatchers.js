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




var dispatcherRunning = setInterval(()=> {


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

        for(var i = 0; i < batchArray[0].length; i++){
            if(batchArray[0][i] != 0){
                batchArray[0][i][3] = batchArray[0][i][3] + 1
                joutput = `<tr><td>${i}</td><td>${batchArray[0][i][0]}</td><td>${batchArray[0][i][2].length}</td><td>${batchArray[0][i][1]}</td><td>${batchArray[0][i][3]}</td><tr>`
                batchData[i].innerHTML = joutput;
            }else{
                joutput = `<tr><td>${i}</td><td> </td><td> </td><td> </td><td> </td><tr>`
                batchData[i].innerHTML = joutput;
            }
        }

        // console.log(readyArray[0])

        algotype = document.getElementById("algo").value;
    
        
        // console.log(!isEmpty(readyArray[0]) && processor[0].length == 0 && lock==false);
        

        // console.log(!isEmpty(readyArray[0]) && processor[0].length == 0 && lock==false);

        if(!isEmpty(readyArray[0]) && processor[0].length == 0 && lock==false){
            block = true;
            lock = true;
            midlock = true;
            // console.log(readyArray);
            selectAlgo(algotype, readyArray, processor);

        }

        

        if(countSpace(suspendedArray[0]) != 12 && countSpace(readyArray[0]) > 2 && midlock == false){
            block = true;
            lock = true;
            midlock = true;

            console.log("Medium Term Scheduling...")
            selectAlgo(algotype, suspendedArray, readyArray);
        }


        
        // console.log(isEmpty(batchArray[0]) == false && isFull(readyArray[0]) == false && block==false && countSpace(readyArray[0]) >= 7);
        // console.log(isEmpty(batchArray[0]) == false)
        // console.log(isFull(readyArray[0]) == false)
        // console.log(block==false)
        // console.log(countSpace(readyArray[0]) >= 7)
        // console.log(countSpace(readyArray[0]))

        //clearInterval(dispatcherRunning)
        if(isEmpty(batchArray[0]) == false && isFull(readyArray[0]) == false && block==false && countSpace(readyArray[0]) > 6 && countSpace(suspendedArray[0]) == 12){
            block = true;
            lock = true;     
            midlock = true;  
            // console.log(batchArray)    
            //setInterval(()=> {console.log(batchArray)}, 1000);
            werwed = batchArray[0][0][3]
            selectAlgo("priority", batchArray, readyArray);
        }

        // console.log(batchArray)

        // for(var j = 0; j < x.length; j++){
        //     for(var i = 0; i < into[0].length; i++){
        //         if(into[0][i] == 0){
        //             into[0][i] = x[j];
        //             animateMove(from[1], i, into, index);
        //             break;
        //             // console.log("problem: " + from[1] + " ans: " + from[0])
        //             // console.log("problem: " + into[1] + " ans: " + into[0])
                    
        //         }
                
        //     }
        // }

        suspendedAction();
        blockedAction();
    
}, 1000);



var interrupt = 4;

async function blockedAction(){

    // Check if blockArray is empty
    if(countSpace(blockArray[0]) != 12){

        // console.log("Block Array Populated")

        for(var i = 0; i < blockArray[0].length; i++){

            if(blockArray[0][i] != 0){
                // console.log("Processing interrupt...")
                
                

                boutput = `<tr> <td>${i}</td> <td>${blockArray[0][i].ID}</td> <td>${blockArray[0][i].content[0]}</td> <td>${blockArray[0][i].content[1]}</td> <td>${blockArray[0][i].w}</td><tr>`
                blockData[i].innerHTML = boutput

                blockArray[0][i].w = blockArray[0][i].w + 1;

                if(blockArray[0][i].content[1] == interrupt){

                    boutput = `<tr><td>${i}</td><td> </td><td> </td><td> </td><td> </td><tr>`
                    blockData[i].innerHTML = boutput

                    blockArray[0][i].content[0] = 0;
    
                    var popped = blockArray[0][i];
                    blockArray[0][i] = 0;

                    index = i;
    
                    for(var j = 0; j < suspendedArray[0].length; j++){
                        if(suspendedArray[0][j] == 0){
                            // console.log("Store in suspended queue...")
                            suspendedArray[0][j] = popped;
                            await animateMove(blockArray[1], j, suspendedArray, index);
                            break;
                        }
                    } 
    
                }else{
                    blockArray[0][i].content[1] = blockArray[0][i].content[1] + 1;
                    // console.log(blockArray[0][i])
                }
                
            }
            
        }

    }
     
}




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