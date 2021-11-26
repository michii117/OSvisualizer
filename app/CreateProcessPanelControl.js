var block= true;
var createProcessPanel;
window.addEventListener("load", (e)=>{

    var createProcess= document.getElementById("createJob");
    createProcessPanel= document.getElementsByClassName("create-process-panel-container")[0];
    createProcess.addEventListener("click", (e)=>{
        displayer();       
    });      

});

function displayer(){
    if(block== true){
        createProcessPanel.style.display = "inline-block";
        block= false;
    }else{
        createProcessPanel.style.display = "none";
        block= true;
    }
}