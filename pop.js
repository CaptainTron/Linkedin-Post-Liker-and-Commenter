// methods to grab all the tags classname and id of html element
const like = document.querySelector('.cbtn');
const comment = document.querySelector('.cmbtn');
const btnv = document.querySelector('.btn');
const go = document.querySelector('.gobtn');

// adding add event listener method to listen for the keyup event and fire up the function that will execnute here:-
like.addEventListener('keyup',function(){
    // check wheather or not they are null 
    if(like.value!="" && comment.value!=""){
        // popup the button if condition match to true
        btnv.classList.remove('hidden');
    }else{
        btnv.classList.add('hidden')
    }
})
// This is for comment input field
comment.addEventListener('keyup',function(){
    if(like.value!="" && comment.value!=""){
        btnv.classList.remove('hidden');
    }else{
        btnv.classList.add('hidden');
    }
})
// this method will open the linkedin feed in the background of page and passs the data of Like count and comment count to contentscript.js using internal messaging system
go.addEventListener('click',function(){
    // grab the active tab and initialte the update method
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0]; 
        // this will open the tabs here;
        chrome.tabs.update(tab.id, {url: 'https://www.linkedin.com/feed/'});
        })
        // this method will pass the likecount and commentcount data to contentscript.js file
        chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
            // this will print data incoming from contentscript.js file
            console.log(message)
            // this will send data
            sendResponse({
                data: like.value,
                data1: comment.value
            }); 
        });
    })