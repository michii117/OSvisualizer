var vlock= true;
var clos = true;
var createProcessPanel;
//had to change this, create job probably shouldnt be being used to both start the simulation AND make jobs, gave the start functionality to Start Sim button
//check bottom of css for css for start sim
window.addEventListener("load", (e)=>{

    var createProcess= document.getElementById("createJob");
    var starter = document.getElementById("Startsim");
    createProcessPanel= document.getElementsByClassName("create-process-panel-container")[0];
    createProcess.addEventListener("click", (e)=>{
        displayer();      
    });  
    starter.addEventListener("click", (e)=>{
        begin();       
    });      

  
});

function displayer(){
    if(clos== true){
        createProcessPanel.style.display = "inline-block";
        clos= false;
    }else{
        createProcessPanel.style.display = "none";
        clos= true;
    }
}

function begin(){
    if(vlock== true){
        vlock = false;
        console.log("Visualizer Played...")
    }else{
        vlock= true;
        console.log("Visualizer Paused...")
    }
}