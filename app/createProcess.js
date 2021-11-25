var batchArray = [[0,0,0,0,0,0], "batch"];
var blockArray = [];
var suspendedArray = [];
var readyArray = [[0,0,0,0,0,0,0,0,0,0,0,0],"ready"];
var id = 0;
var order = 0;
var jobID = 0;
var batchJobs;
var readyQueue;
var processorData;
var readyData;
var batchData;
var genProcess;


window.addEventListener("load", (e)=>{

    genProcess= document.getElementById("generateJob");
    processorData = document.getElementById("proccessorBody");
    readyData = document.getElementsByClassName("rbody");
    batchData = document.getElementsByClassName("jbody");
    batchJobs = document.getElementsByClassName("jobContainer")
    readyQueue = document.getElementsByClassName("proccessContainer")

    genProcess.addEventListener("click", async (e)=>{

        // e.preventDefault();

        


        numOfProcesses = generaterandomNumber(1, 7);
        //console.log(numOfProcesses)
        const job = ["jobID"+jobID++, generaterandomNumber(1, 5),[],0]


        for(i=0; i< numOfProcesses; i++){
            const process = {ID: "processID"+id++, s: generaterandomNumber(4, 31), priority: generaterandomNumber(1, 6), content: generaterandomNumber(0, 2), e: 0, w: 0, o:order++};
            job[2].push(process)       
        }

        // console.log(countSpace(batchArray[0]))

        for(i=0; i< batchArray[0].length; i++){
            if (batchArray[0][i] == 0){
                batchArray[0][i] = job;
                batchJobs[i].innerHTML = `<img src='images/process.png' class='processImg' id="${job[0].ID}">`
                break;               
            }
        }      

        //console.log(batchArray)
        
    });

});

function generaterandomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
    
}