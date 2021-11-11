import {getUsers} from "../data/provider.js"

export const MessageUsers = () => { // eporting the desired html to the page
    const users = getUsers()
    let html= "" 
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
<button class = "cancel" type="button">cancel</button>`
return html
}

// save/ cancle buttons needed 

document.addEventListener(
    "click",
    (clickEvent) => {
        if (changeEvent.target.id === "send") {
            const sendClicked = changeEvent.target.value
        } 
    }
)