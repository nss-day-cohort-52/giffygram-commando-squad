import {getUsers} from "../data/provider.js"

export const MessageUsers = () => { // eporting the desired html to the page
    const users = getUsers()
    let html= "" 
    if(messageIconClicked === 1){
        // the fx below it the recipient drop down
        html += ` <div> <label> Recipient: </label> </div>
        <select id="user"> 
        <div><option value="0">Choose your friend </option> </div>
        `
             for (const user of users) { 
                html += `<option value="${user.id}" > ${user.name} </option>` 
            } 
            
        html+= "</select></div>"  
    // here we start the input field gor messages
    html +=  `<div class="field">
    <label class="label" for="Message box">What are you thinking?</label> </div>
    <div><textarea type="text" name="Message" class="textarea"> </textarea>
    </div>`
    
    html += `<button class = "send" type="button">send</button>
    <button id = "cancel" class = "cancel" type="button">cancel</button>`
}
    else{

    }
    return html
    
}

let messageIconClicked = null

document.addEventListener("click", clickEvent => {
    // if the message button is clicked
    if (clickEvent.target.id === "directMessageIcon") {
    //we need to open the message block
        messageIconClicked = 1
        //dispatch an event that will rerender the page
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

document.addEventListener("click", clickEvent => {
    // if the message button is clicked
    if (clickEvent.target.id === "cancel") {
    //we need to close the message block
        messageIconClicked = null
        //dispatch an event that will rerender the page
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
})
