

// if (document.addEventListener) {
//     document.addEventListener('contextmenu', function(e) {
//       alert("You've tried to open context menu"); //here you draw your own menu
//       e.preventDefault();
//     }, false);
//   } else {
//     document.attachEvent('oncontextmenu', function() {
//       alert("You've tried to open context menu");
//       window.event.returnValue = false;
//     });
//   }



// chrome.contextMenu.create({
//     title: 'test',
//     onclick: function(e){
//         console.log(e)
//     }

// }, function(){})




// chrome.contextMenus.onClicked.addListener(onClickHandler);

// // The onClicked callback function.
// function onClickHandler(info, tab) {
     
   
// log('foo');
// };

// function log(message) {
//     document.getElementById('log').textContent += message + '\n';
//   }
  
//   chrome.contextMenus.onClicked.addListener(function(info) {
//     if (!document.hasFocus()) {
//       log('Ignoring context menu click that happened in another window');
//       return;
//     }
  
//     log('Item selected in A: ' + info.menuItemId);
//   });