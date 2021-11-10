import {getUsers} from "../data/provider.js"

export const MessageUsers = () => { // eporting the desired html to the page
    const users = getUsers()
    let html= "" 
    // the fx below it the recipient drop down
    html += ` <div> <label> Choose your user </label> 
    <select id="user"> 
    <option value="0">Choose your user </option> 
    `
         for (const user of users) { 
            html += `<option value="${user.id}" > ${user.name} </option>` 
        } 
        
    html+= "</select></div>"  
// here we start the input field gor messages
html +=  `<div class="field">
<label class="label" for="serviceDescription">Description</label>
<input type="text" name="serviceDescription" class="input" />
</div>`

return html
}

// save/ cancle buttons needed 
