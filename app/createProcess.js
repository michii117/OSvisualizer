var batchArray = [[0,0,0,0,0,0], "batch"];
var blockArray = [[0,0,0,0,0,0,0,0,0,0,0,0],"block"];
var suspendedArray = [[0,0,0,0,0,0,0,0,0,0,0,0],"readySus"];
var readyArray = [[0,0,0,0,0,0,0,0,0,0,0,0],"ready"];
var backlog = [];

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
let genJob;
let finc;

//added new button "finish creation"(finish) to add the job to the queue thingie when all processes have been added

var consoleMin;



window.addEventListener("load", (e)=>{

    
    genProcess= document.getElementById("generateJob");
    genJob = document.getElementById("generateProcess");
    finc = document.getElementById("finish");
    processorData = document.getElementById("proccessorBody");
    readyData = document.getElementsByClassName("rbody");
    batchData = document.getElementsByClassName("jbody");
    blockData = document.getElementsByClassName("bbody");
    susData = document.getElementsByClassName("sbody");

    batchJobs = document.getElementsByClassName("jobContainer")
    readyQueue = document.getElementsByClassName("proccessContainer")
    blockedQueue = document.getElementsByClassName("blockedContainer");
    suspendedQueue = document.getElementsByClassName("suspendedContainer");

    
    consoleMin = document.getElementById("html_console")

    genProcess.addEventListener("click", async (e)=>{

        document.getElementById("os-title1").classList.add("active")        
        document.getElementById("os-title6").classList.add("active")

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

        if(countSpace(batchArray[0]) == 0){

            backlog.push(job)          
            console.log("Job added to backlog: " + job[0]) // System Call

        }else{
            for(i=0; i< batchArray[0].length; i++){
                if (batchArray[0][i] == 0){

                    console.log("Job added to batch Queue: " + job[0])

                    batchArray[0][i] = job;
                    batchJobs[i].innerHTML = `<img src='images/process.png' class='processImg' id="${job[0].ID}">`
                    break;               
                }
            } 
        }
            

        //console.log(batchArray)
        
    });


    consoleMin.addEventListener("mouseover", (e)=>{
        consoleHover = true;
    });
    
    consoleMin.addEventListener("mouseleave", (e)=>{
        consoleHover = false;
    });

    
});

function generaterandomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
    
}