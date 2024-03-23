(()  => {
    // creating variabls to store value so that it can be used for loops
        let likec,commentc,totalcount;
        // receiveing message and sending message form pop.js file
        chrome.runtime.sendMessage({
            data: "DataFectched Successfully"
             }, function (response) {
              console.log(response);
            //   parsing data to int so that it can be used as nummbers
              likec = parseInt(response.data);
              commentc = parseInt(response.data1)
            //   console loggint the data to browser page that si linkedin page
              console.log("Like count si " + likec);
              console.log("Comment Count is "+commentc);
            //   alert(totalcount);
            
        })
        // this is to check value at regular intervals
        let i=0,k=0;
                    // this function will print comment and like the button
                    // we have to make sure that DOM content has been successfully loaded and change is made thereafter otherwise it will show undefined error
                    // and also it will skip that part
                    // so that's why I've used timed interval to call and update value at intervals
                    function changehere() {
                            if(i<likec){
                                // this will grab the like button in the webpage and put it on like variable
                                let like = document.querySelector('.scaffold-finite-scroll__content').querySelectorAll('div .feed-shared-social-action-bar__action-button .react-button__trigger')[i]
                                // this will click that like button
                                like.click();
                                i++;
                              }
                                if(k<commentc){
                                  // this will first open the comment button
                                  let commentbtn = document.querySelector('.scaffold-finite-scroll__content').querySelectorAll('div .comment span div button')[k]
                                  commentbtn.click()
                                  // this will grab that input container from where we will input our data
                                  let comment = document.querySelector('.scaffold-finite-scroll__content').querySelectorAll('div .feed-shared-update-v2__comments-container .comments-comment-box .comments-comment-box__form-container .comments-comment-texteditor .comments-comment-box-comment__text-editor .editor-container .editor-content .ql-editor p')[k];
                                  // this will put data into that input field and ready to go
                                  comment.innerHTML="CFBR";
                                  // this will grab the post button where we must click to submit the our comment
                                  let post = document.querySelector('.scaffold-finite-scroll__content').querySelectorAll('div .social-details-social-activity .feed-shared-update-v2__comments-container .comments-comment-box .comments-comment-box__form-container form')[k].querySelectorAll('div button')[2]
                                  // this willl click on post button and will submit the task;
                                  post.click();
                                  k++;
                                }
                              }
                              // like.click();
                              // post.click();
                        // thsi method wil call changehere function again and again because it is timed event
                    setInterval(changehere, 4000);
                
})();


        
