// this module is the messaging form

// make a function that returns html to the dom

/// this Html shouls have the format of the form to sent messages 

/// we need a drop down to select active governers from the list

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "governor") {
            const governerOption = changeEvent.target.value
        } // we need to store selected govoner in transient state.
    }
)


export const MessageUserSelect = () => { // eporting the desired html to the page
    const user = getUsers()
    let html= "" 
    html += ` <div> <label> Choose your user </label> 
    <select id="user"> 
    <option value="0">Choose your user </option> 
    `
         for (const user of users) { 
            html += `<option value="${user.id}" > ${user.name} </option>` 
        } 
        
    html+= "</select></div>"  
    
 return html //returning the HTML string
}

export const MessageTextArea = () => { // eporting the desired html to the page
    const user = getUsers()
    let html= "" 
    html +=  `<div class="field">
    <label class="label" for="serviceDescription">Description</label>
    <input type="text" name="serviceDescription" class="input" />
</div>'
         
}
