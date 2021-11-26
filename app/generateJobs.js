var batchArray = [[0,0,0,0,0,0], "batch"];
var blockArray = [[0,0,0,0,0,0,0,0,0,0,0,0],"block"];
var suspendedArray = [[0,0,0,0,0,0,0,0,0,0,0,0],"readySus"];
var readyArray = [[0,0,0,0,0,0,0,0,0,0,0,0],"ready"];

var id = 0;
var order = 0;
var jobID = 0;

var batchJobs;
var readyQueue;
var blockedQueue;
var suspendedQueue;

var processorData;
var readyData;
var batchData;
var blockData;
var susData;

var genProcess;


window.addEventListener("load", (e)=>{

    genProcess= document.getElementById("generateJob");
    genJob = document.getElementById("generateProcess");
    processorData = document.getElementById("proccessorBody");
    readyData = document.getElementsByClassName("rbody");
    batchData = document.getElementsByClassName("jbody");
    blockData = document.getElementsByClassName("bbody");
    susData = document.getElementsByClassName("sbody");

    batchJobs = document.getElementsByClassName("jobContainer")
    readyQueue = document.getElementsByClassName("proccessContainer")
    blockedQueue = document.getElementsByClassName("blockedContainer");
    suspendedQueue = document.getElementsByClassName("suspendedContainer");

    genProcess.addEventListener("click", async (e)=>{

        // e.preventDefault();

        


        numOfProcesses = generaterandomNumber(1, 7);
        //console.log(numOfProcesses)
        const job = ["jobID"+jobID++, generaterandomNumber(1, 5),[],0]
        

        for(i=0; i< numOfProcesses; i++){
            se = generaterandomNumber(6, 31)

            const process = {ID: "processID"+id++, s: se, priority: generaterandomNumber(1, 5), content: [generaterandomNumber(0, 2)], e: 0, w: 0, o:order++};
            
            if(process.content[0] == 1){
                process.content.push(generaterandomNumber(1, se-3))
            }
            
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