import { getPosts } from "../data/provider.js"
import { GiffyGram } from "../GiffyGram.js"

const applicationElement = document.querySelector(".giffygram")

// We need a function that will generate a user's profile as HTML


/* 
The profile needs to display 3 things
1. The users name 
2. The number of posts they have made
3. All messages between the current user and the user of the profile being viewed (we don't have the messages portion of the application fully fleshed out yet)
*/   

export const generateProfile = (user) => {
    const posts = getPosts()
    const filteredPosts = posts.filter(post => post.userId === user.id)
    return `<div class="profile">
                <div class="profile__name">${user.name}</div>
                <div class="profile__posts">Number of posts: ${filteredPosts.length}</div>
                <button id="leaveProfile">Go Back</button>
            </div>`
}

document.addEventListener("click",
click => {
    if (click.target.id === "leaveProfile") {
        applicationElement.innerHTML = GiffyGram()
    }
})