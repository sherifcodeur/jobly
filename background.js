


chrome.runtime.onInstalled.addListener(async ()=>{



        chrome.contextMenus.create({
            title: 'job title grab',
            id:"1",
            contexts:["selection"]     
        
        
        })

        let url = chrome.runtime.getURL("hello.html");
        let tab = await chrome.tabs.create({ url });

        console.log(`Created tab ${tab.id}`);


})


  async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }


// function log(message) {
//     document.getElementById('udemy').textContent += message + '\n';
//   }
  
  chrome.contextMenus.onClicked.addListener(function(info) {
   
  
    console.log('Item selected in A: ' + info.menuItemId);

    if(info.menuItemId === "1"){

      const urli = getCurrentTab().then(res=>{

        console.log(res)


        const tabid = res.id;
        chrome.scripting.executeScript(
            {
              target: {tabId: tabid},
              files: ['scriptos.js'],
            },
            () => { console.log("execute") });







      })

      
    }


  });







  // async function  getSelectionText () {
  //   var text = "";
  //   //  const taby = await chrome.tabs.query( {active: true})

  //   chrome.tabs.getCurrent().then(rel =>{

  //     console.log(rel)

      


  //   })

    

     
    //  else if (document.selection && document.selection.type != "Control") {
    //     text = document.selection.createRange().text;
    // }
    
