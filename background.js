

// launch when install the extension
chrome.runtime.onInstalled.addListener(async ()=>{


      // creating context menu that appear only when selected item
        chrome.contextMenus.create({
            title: 'job title grab',
            id:"1",
            contexts:["selection"]          
        })

        // getting url and open it in new tab
        let url = chrome.runtime.getURL("hello.html");
        let tab = await chrome.tabs.create({ url });

        console.log(`Created tab ${tab.id}`);


})

// gets the current tab 
  async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }


  // when clicked one of the contextMenu
  chrome.contextMenus.onClicked.addListener(function(info) {
   
     // we check if the id of the contextmenu is 1
    if(info.menuItemId === "1"){

      const urli = getCurrentTab().then(res=>{

        const tabid = res.id;
        // we execute this script when menu item clicked
        chrome.scripting.executeScript(
            {
              target: {tabId: tabid},
              files: ['script1.js'],
            },
            () => { console.log("executed scriptos") });

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
    
