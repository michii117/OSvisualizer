var consoleHover = false;

console.log = function(message){ 

    var print =  document.createElement("p") 
    print.innerHTML = message; 
    consoleMin.appendChild(print); 

    if(consoleHover == false){
        consoleMin.scrollBy(0,100);
    }
} 

