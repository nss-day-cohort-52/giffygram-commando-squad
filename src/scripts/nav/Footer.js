import { getUsers, getPosts, setChosenUser } from "../data/provider.js"
export const dropdownUsers = () => { // eporting the desired html to the page
    const users = getUsers()
    const posts = getPosts()

    let html= "" 
        // the footer user  drop down
        html += ` <div> <label> users </label> </div>
        <select id="sortUser"> 
        <div><option value="0">who's post would you like to see</option> </div>
        `
             for (const user of users) { 
                html += `<option value="${user.id}" > ${user.name} </option>` 
            } 
            
        html+= "</select></div>"  
    
    return html
}
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "sortUser") {
            const userId = changeEvent.target.value
            setChosenUser(parseInt(userId))
        }
    }
)