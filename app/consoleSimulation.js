var consoleHover = false;

console.log = function(input){ 
    //Create a new paragraph element 
    var el =  document.createElement("p") 
    //Fill it with your input text from the console.log() function 
    el.innerHTML = input; 
    //Place you new element in a element on the webpage 
    consoleMin.appendChild(el); 

    if(consoleHover == false){
        consoleMin.scrollBy(0,100);
    }
    
} 

