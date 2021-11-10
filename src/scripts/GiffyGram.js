import { PostEntry } from "./feed/PostEntry.js"
import { navBar } from "./nav/navBar.js"
import { MessageUsers } from "./message/MessageForm.js"
export const GiffyGram = () => {

    // Show main main UI
    return `
        <h1>Giffygram</h1>
        ${navBar()}
        ${PostEntry()}
       
        
        ${MessageUsers()}
    `
}
