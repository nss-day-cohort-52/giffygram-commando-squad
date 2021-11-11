import { PostEntry } from "./feed/PostEntry.js"
import { navBar } from "./nav/navBar.js"

export const GiffyGram = () => {

    // Show main main UI
    return `
        ${navBar()}
        ${PostEntry()}
        ${navBar()}
    `
}
