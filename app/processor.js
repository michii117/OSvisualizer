async function processorAction(x,type){
    
    processor[0].push(x);
    var swap = 0;

    var subtract = setInterval( async () => {
        processor[0][0].s = processor[0][0].s - 1
        processor[0][0].e = processor[0][0].e + 1
        // console.log("Processor working on process: " + processor[0][0].ID);
        // console.log(processor[0][0]);
        swap++

        await processor[0].forEach((item , index) =>{
                if(item != 0 || item.length != 0){
                    output = `<tr><td>0</td><td>${item.ID}</td><td>${item.s}</td><td>${item.e}</td><td>${item.w}</td><tr>`
                }
                        
        });
        
        processorData.innerHTML = output

        // if(type == "pre" && processor[0][0].s > 0 && swap == 4){
        //     var val = processor[0].pop()
        //     for(var i = 0; i < readyArray[0].length; i++){
        //         if(readyArray[0][i] == 0){
        //             readyArray[0][i] = val;
        //             await animateMove(processor[1], i, readyArray, 0);
        //             await setTimeout(()=>{console.log("delay...")},2000) // console
        //         }
                
        //     }
        //     clearInterval(subtract);
        // }
        if(processor[0][0].s<=0){
            processor[0].pop()
            output = `<tr><td>0</td><td> </td><td> </td><td> </td><td> </td><tr>`
            processorData.innerHTML = output
            clearInterval(subtract);
            //clearInterval(running);
            
            // console.log("Processor finished process: " + processor[0][0].ID);
            // console.log(processor[0][0].s);
        }

        



    }, 1000);
    
}