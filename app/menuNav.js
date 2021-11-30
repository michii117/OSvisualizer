window.addEventListener("load", (e) =>{


    var overview = document.getElementById("menuoverviewcontrol")
    var longlist = document.getElementsByClassName("long")
    var midlist = document.getElementsByClassName("mid")
    var shortlist = document.getElementsByClassName("short")
    var overviewValue = document.getElementById("menuoverviewcontrol").value

    if(overviewValue == "Long-term"){
            
        for(i=0;i<midlist.length;i++){
            midlist[i].classList.add("hideinmenu")
        }
        for(i=0;i<shortlist.length;i++){
            shortlist[i].classList.add("hideinmenu")
        }
        for(i=0;i<longlist.length;i++){
            longlist[i].classList.remove("hideinmenu")
        }

        document.getElementById("processorTable").classList.add("hideinmenu")

    }

    overview.addEventListener("change", (e) =>{ // Gets value of menu change drop down on change and updates sidebar menu view

        overviewValue = document.getElementById("menuoverviewcontrol").value
        

        console.log("Menu view switched to: " + overviewValue)
        if(overviewValue == "Short-term"){ // Show short term menu
            document.getElementById("html_console").classList.add("extend"); // Extends console on screen

            for(i=0;i<longlist.length;i++){
                longlist[i].classList.add("hideinmenu")
            }
            for(i=0;i<midlist.length;i++){
                midlist[i].classList.add("hideinmenu")
            }
            for(i=0;i<shortlist.length;i++){
                shortlist[i].classList.remove("hideinmenu")
            }

            document.getElementById("processorTable").classList.remove("hideinmenu")

        }else if(overviewValue == "Long-term"){ // Show longterm menu
            document.getElementById("html_console").classList.remove("extend");
            for(i=0;i<midlist.length;i++){
                midlist[i].classList.add("hideinmenu")
            }
            for(i=0;i<shortlist.length;i++){
                shortlist[i].classList.add("hideinmenu")
            }
            for(i=0;i<longlist.length;i++){
                longlist[i].classList.remove("hideinmenu")
            }

            document.getElementById("processorTable").classList.add("hideinmenu")

        }else if(overviewValue == "Medium-term"){ // Show mediumdterm menu
            document.getElementById("html_console").classList.remove("extend");
            for(i=0;i<midlist.length;i++){
                midlist[i].classList.remove("hideinmenu")
            }
            for(i=0;i<shortlist.length;i++){
                shortlist[i].classList.add("hideinmenu")
            }
            for(i=0;i<longlist.length;i++){
                longlist[i].classList.add("hideinmenu")
            }

            document.getElementById("processorTable").classList.remove("hideinmenu")

        }
    })

});