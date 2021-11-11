import { deletePost, getUsers } from "../data/provider.js"

// Write a function that will generate a post as html. This function will take a post as a paramter. This function will be used as a callback function to map over our posts array
export const buildPost = (post) => {
    const users = getUsers()
    const foundUser = users.find(user => user.id === post.userId)
    for (const user of users) {
        if (user.id === post.userId) {
            return `<div class="post">
                        <h2 class="post__title">${post.title}</h2>
                        <img class="post__image" src="${post.url}">
                        <div class="post__description">${post.description}</div>
                        <div class="post__tagline">Posted by ${foundUser.name} on 11/10/2021</div>
                        <div class="post__actions">
                            <div>
                                <img id="favoritePost--${post.id}" class="actionIcon" src="images/favorite-star-blank.svg">
                            </div>
                            <div>
                                <img id="blockPost--${post.id}" class="actionIcon" src="images/block.svg">
                            </div>
                        </div>
                    </div>`
        }
        else {
            return `<div class="post">
                        <h2 class="post__title">${post.title}</h2>
                        <img class="post__image" src="${post.url}">
                        <div class="post__description">${post.description}</div>
                        <div class="post__tagline">Posted by ${foundUser.name} on 11/10/2021</div>
                        <div class="post__actions">
                            <div>
                                <img id="favoritePost--${post.id}" class="actionIcon" src="images/favorite-star-blank.svg">
                            </div>
                        </div>
                    </div>`
        }
    }
}

document.addEventListener("click",
    click => {
        if (click.target.id.startsWith("blockPost--")) {
            const [, postId] = click.target.id.split("--")
            deletePost(parseInt(postId))
        }
    })