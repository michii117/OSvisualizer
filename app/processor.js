async function processorAction(x,type){
    
    processor[0].push(x);
    var swap = 1;

    if(processor[0][0] != 0 || processor[0].length != 0){
        output = `<tr><td>0</td><td>${processor[0][0].ID}</td><td>${processor[0][0].s}</td><td>${processor[0][0].e}</td><td>${processor[0][0].w}</td><td>${processor[0][0].content[0]}</td><tr>`
    }
    
    processorData.innerHTML = output

    var subtract = setInterval( async () => {
        processor[0][0].s = processor[0][0].s - 1
        processor[0][0].e = processor[0][0].e + 1
        processor[0][0].content[1] = processor[0][0].content[1] - 1
        // console.log("Processor working on process: " + processor[0][0].ID);
        // console.log(processor[0][0]);
        
        console.log(processor[0][0].content)
        if(processor[0][0] != 0 || processor[0].length != 0){
            output = `<tr><td>0</td><td>${processor[0][0].ID}</td><td>${processor[0][0].s}</td><td>${processor[0][0].e}</td><td>${processor[0][0].w}</td><td>${processor[0][0].content[0]}</td><tr>`
        }
        
        processorData.innerHTML = output
        
        //await setTimeout(()=>{console.log("delay...")},1000) // console

        if(type == "pre" && processor[0][0].s > 0 && swap == 4){
            var val = processor[0].pop()
            for(var i = 0; i < readyArray[0].length; i++){
                if(readyArray[0][i] == 0){
                    readyArray[0][i] = val;
                    await animateMove(processor[1], i, readyArray, 0);
                    break;
                }
                
            }
            clearInterval(subtract);

        }else if(processor[0][0].content[1] == 0 && processor[0][0].content[0] == 1){
            console.log("Interrupt...")
            var val1 = processor[0].pop()
            for(var i = 0; i < blockArray[0].length; i++){
                if(blockArray[0][i] == 0){
                    console.log("Store in blocked...")
                    blockArray[0][i] = val1;
                    await animateMove(processor[1], i, blockArray, 0);
                    clearInterval(subtract);
                    break;
                }
                
            } 

        }else if(processor[0][0].s<=0){

            if(processor[0][0] != 0 || processor[0][0].length != 0){
                output = `<tr><td>0</td><td>${processor[0][0].ID}</td><td>${processor[0][0].s}</td><td>${processor[0][0].e}</td><td>${processor[0][0].w}</td><td>${processor[0][0].content[0]}</td><tr>`
            }
            
            processorData.innerHTML = output

            processor[0].pop()

            if(countSpace(readyArray[0]) == 12 && countSpace(suspendedArray[0]) && countSpace(batchArray[0]) && countSpace(blockArray[0])){
                console.log("Finished processing process")
                output = `<tr><td>0</td><td> </td><td> </td><td> </td><td> </td><td> </td><tr>`
                processorData.innerHTML = output
            }
            clearInterval(subtract);


            //clearInterval(running);
            
            // console.log("Processor finished process: " + processor[0][0].ID);
            // console.log(processor[0][0].s);
        }

        swap++

    }, 1000);

    console.log("Finished processing process")
    output = `<tr><td>0</td><td> </td><td> </td><td> </td><td> </td><td> </td><tr>`
    processorData.innerHTML = output
    swap = 1;
    
}