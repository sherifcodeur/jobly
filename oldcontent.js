
// let elem = document.querySelector('.js');
// elem.replaceWith(elem.cloneNode(true));


 // on met tous les scripts avec une source nulle et un contenu nul
const scriptynul = ()=>{

    let allscripts = document.getElementsByTagName('script');

    for (let index = 0; index < allscripts.length; index++) {
        const script = allscripts[index];

        script.innerHTML = ""
        script.src = ""
        
    }  
}



const removeiframes = ()=>{


    let elements = document.getElementsByTagName("iframe");

    console.log("the elements",elements)

     while (elements.length) {
     elements[0].parentNode.removeChild(elements[0]);
   }

}





window.addEventListener("load", function(){


   
   scriptynul()



// let scriptos = document.querySelectorAll('script[data-cfasync="false"]');

// console.log(scriptos)


// for (let index = 0; index < scriptos.length; index++) {
//     const script = scriptos[index].childNodes[0];

//     // script.data=""
    
// }



// const leposter = document.querySelectorAll('.short-poster')

// leposter.forEach(poster=>poster.addEventListener('focus',(e)=>{e.preventDefault();

// window.location.href = poster.href

// console.log(poster.href)

// }))


// const lemov = document.querySelectorAll('.short-poster')

// lemov.forEach(poster=>poster.addEventListener('click',(e)=>{e.preventDefault();

// window.location.href = poster.href

// console.log(poster.href)

// }))



});

const targetNode = document.getElementsByTagName('html');

console.log("targeted node",targetNode[0])

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
            removeiframes()
            scriptynul()
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode[0], config);


// remove the iframes (remove the last 3 frames)
// document.childNodes[1].childNodes[2].remove()



//acces aux nodes de head
// document.childNodes[1].childNodes[0].childNodes

// type 1 c un meta 
//lehead.forEach(h=>{console.log(h.nodeType)})

// le nodename nous donne SCRIPT
//lehead.forEach(h=>{console.log(h.nodeName)})