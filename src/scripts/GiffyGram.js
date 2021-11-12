import { PostEntry } from "./feed/PostEntry.js"
import { PostList } from "./feed/PostList.js"
import { navBar } from "./nav/navBar.js"
import { MessageUsers } from "./message/MessageForm.js"
import { dropdownUsers } from "./nav/Footer.js"
export const GiffyGram = () => {

    // Show main main UI
    return `
        ${navBar()}
        ${MessageUsers()}
        ${PostEntry()}
        ${PostList()}
        ${dropdownUsers()}
    `
}
