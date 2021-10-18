

// window.onerror = function(msg, url, line, col, error) {
//     // Note that col & error are new to the HTML 5 spec and may not be 
//     // supported in every browser.  It worked for me in Chrome.
//     var extra = !col ? '' : '\ncolumn: ' + col;
//     extra += !error ? '' : '\nerror: ' + error;
 
//     // You can view the information in an alert to see things working like this:
//     alert("Error: " + msg + "\nurl: " + url + "\nline: " + line + extra);
 
//     // TODO: Report this error via ajax so you can keep track
//     //       of what pages have JS issues
 
//     var suppressErrorAlert = true;
//     // If you return true, then error alerts (like in older versions of 
//     // Internet Explorer) will be suppressed.
//     return suppressErrorAlert;
//  };

window.onerror = ()=>{

    console.log("éeeur lancee")
}

// document.childNodes[1].childNodes[4].remove()
 document.childNodes[1].childNodes[3].remove()
 document.childNodes[1].childNodes[2].remove()


console.log(document.childNodes[1].childNodes)

lanodemere = document.childNodes[1] 

let lesnodes = document.childNodes[1].childNodes;

lesnodes.forEach(nod=>{

    console.log(nod.nodeName)
})



// Options for the observer (which mutations to observe)
const config = { attributes: false, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');

            let lesnodes = document.childNodes[1].childNodes;
            let moons =document.childNodes[1].childNodes[1].childNodes;
            let headis =document.childNodes[1].childNodes[0].childNodes;

                lesnodes.forEach(nod=>{

                    console.log(nod.nodeName)

                    if(nod.nodeName ==="IFRAME" ){

                        nod.remove()
                    }
                })

                moons.forEach(moon=>{

                    console.log(moon.nodeName)
                
                    if(moon.nodeName === "SCRIPT"){
                
                        moon.remove()
                    }
                
                    if(moon.nodeName === "IFRAME"){
                
                        moon.remove()
                    }
                })


                headis.forEach(heado=>{

                    console.log(heado.nodeName)
                
                    if(heado.nodeName === "SCRIPT"){
                
                        heado.remove()
                    }
                
                    if(heado.nodeName === "IFRAME"){
                
                        heado.remove()
                    }
                })
           
        }
       
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(lanodemere, config);


// let moons =document.childNodes[1].childNodes[1].childNodes

// moons.forEach(moon=>{

//     console.log(moon.nodeName)

//     if(moon.nodeName === "SCRIPT"){

//         moon.remove()
//     }

//     if(moon.nodeName === "IFRAME"){

//         moon.remove()
//     }
// })

const scriptynul = ()=>{

    let allscripts = document.getElementsByTagName('script');

    for (let index = 0; index < allscripts.length; index++) {
        const script = allscripts[index];

        script.innerHTML = ""
        script.src = ""
        
    }  
}

scriptynul()





