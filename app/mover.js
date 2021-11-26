function mover(from, into, i, index, x,type){
    if(into[1] == "processor"){        
        processor[0].push(x);
        animateMove(from[1], i = 0, into, index);
        processorAction(type);                
    }else{
        for(var i = 0; i < into[0].length; i++){
            if(into[0][i] == 0){
                into[0][i] = x;
                console.log("From: " + from[1] + " Into: " + into[1] + " i: " + i + " index: " + index)
                animateMove(from[1], i, into, index);
                break;
            }
            
        }
    }
}