function selectAlgo(type, from, into){
    switch(type){
        case "srt":
            srt(from, into);
            break;
        case "spn":
            spn(from, into);
            break;
        case "fcfs":
            fcfs(from, into);
            break;
        case "hrrn":
            hrrn(from, into);
            break;
        case "priority":
            priority(from, into);
    }
}



