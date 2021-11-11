import { PostEntry } from "./feed/PostEntry.js"
import { PostList } from "./feed/PostList.js"
import { navBar } from "./nav/navBar.js"
import { MessageUsers } from "./message/MessageForm.js"
export const GiffyGram = () => {

    // Show main main UI
    return `
<<<<<<< HEAD

        
=======
>>>>>>> main
        ${navBar()}
        ${PostEntry()}
        ${PostList()}
        ${MessageUsers()}

    `
}
