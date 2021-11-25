var allowNum = 12;
var processor = [[],"processor"];
var lock = false;
var block = false;
var algotype
var output= "";
var routput= "";
var boutput= "";
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
                boutput = `<tr><td>${i}</td><td>${batchArray[0][i][0]}</td><td>${batchArray[0][i][2].length}</td><td>${batchArray[0][i][1]}</td><td>${batchArray[0][i][3]}</td><tr>`
                batchData[i].innerHTML = boutput;
            }else{
                boutput = `<tr><td>${i}</td><td> </td><td> </td><td> </td><td> </td><tr>`
                batchData[i].innerHTML = boutput;
            }
        }

        

        // console.log(readyArray[0])

        algotype = document.getElementById("algo").value;
    
        
        // console.log(!isEmpty(readyArray[0]) && processor[0].length == 0 && lock==false);
        

        // console.log(!isEmpty(readyArray[0]) && processor[0].length == 0 && lock==false);

        if(!isEmpty(readyArray[0]) && processor[0].length == 0 && lock==false){
            block = true;
            // console.log(readyArray);
            selectAlgo(algotype, readyArray, processor);

        }

        
        
        // console.log(isEmpty(batchArray[0]) == false && isFull(readyArray[0]) == false && block==false && countSpace(readyArray[0]) >= 7);
        // console.log(isEmpty(batchArray[0]) == false)
        // console.log(isFull(readyArray[0]) == false)
        // console.log(block==false)
        // console.log(countSpace(readyArray[0]) >= 7)
        // console.log(countSpace(readyArray[0]))

        //clearInterval(dispatcherRunning)
        if(isEmpty(batchArray[0]) == false && isFull(readyArray[0]) == false && block==false && countSpace(readyArray[0]) > 6){
            block = true;
            lock = true;       
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

    
}, 1000);

