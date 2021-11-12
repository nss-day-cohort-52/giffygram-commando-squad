import { deleteLike, deletePost, getLikes, getUsers, likePost } from "../data/provider.js"

// Write a function that will generate a post as html. This function will take a post as a parameter. This function will be used as a callback function to map over our posts array
export const buildPost = (post) => {
    const currentUserId = parseInt(localStorage.getItem("gg_user"))
    const users = getUsers()
    const likes = getLikes()
    const foundUser = users.find(user => user.id === post.userId)
    const foundLike = likes.find(like => like.userId === parseInt(currentUserId) && like.postId === post.id)
    if (currentUserId === post.userId && foundLike) {
        // Generates a liked post (post was made by current user) 
        return `<div class="post">
                        <h2 class="post__title">${post.title}</h2>
                        <img class="post__image" src="${post.url}">
                        <div class="post__description">${post.description}</div>
                        <div class="post__tagline">Posted by ${foundUser.name} on 11/10/2021</div>
                        <div class="post__actions">
                            <div>
                                <img id="favoritedPost--${post.id}" class="actionIcon" src="images/favorite-star-yellow.svg">
                            </div>
                            <div>
                                <img id="blockPost--${post.id}" class="actionIcon" src="images/block.svg">
                            </div>
                        </div>
                    </div>`
    }
    else if (foundLike) {
        // Generates a liked post (post NOT made by current user)
        return `<div class="post">
                        <h2 class="post__title">${post.title}</h2>
                        <img class="post__image" src="${post.url}">
                        <div class="post__description">${post.description}</div>
                        <div class="post__tagline">Posted by ${foundUser.name} on 11/10/2021</div>
                        <div class="post__actions">
                            <div>
                                <img id="favoritedPost--${post.id}" class="actionIcon" src="images/favorite-star-yellow.svg">
                            </div>
                        </div>
                    </div>`
    }
    else if (currentUserId === post.userId) {
        // Generates an unliked post (post made by current user)
        return `<div class="post">
                        <h2 class="post__title">${post.title}</h2>
                        <img class="post__image" src="${post.url}">
                        <div class="post__description">${post.description}</div>
                        <div class="post__tagline">Posted by ${foundUser.name} on 11/10/2021</div>
                        <div class="post__actions">
                            <div>
                                <img id="unFavoritedPost--${post.id}" class="actionIcon" src="images/favorite-star-blank.svg">
                                
                            </div>
                            <div>
                                <img id="blockPost--${post.id}" class="actionIcon" src="images/block.svg">
                            </div>
                        </div>
                    </div>`
    }
    else {
        // Generates an unliked post (post NOT made by current user)
        return `<div class="post">
                        <h2 class="post__title">${post.title}</h2>
                        <img class="post__image" src="${post.url}">
                        <div class="post__description">${post.description}</div>
                        <div class="post__tagline">Posted by ${foundUser.name} on 11/10/2021</div>
                        <div class="post__actions">
                            <div>
                                <img id="unFavoritedPost--${post.id}" class="actionIcon" src="images/favorite-star-blank.svg">
                            </div>
                        </div>
                    </div>`
    }
}


document.addEventListener("click",
    click => {
        if (click.target.id.startsWith("unFavoritedPost--")) {
            const [, postId] = click.target.id.split("--")
            const userId = localStorage.getItem("gg_user")
            const likeObj = {
                postId: parseInt(postId),
                userId: parseInt(userId)
            }
            likePost(likeObj)
        }
    })

document.addEventListener("click",
    click => {
        const likes = getLikes()
        if (click.target.id.startsWith("favoritedPost--")) {
            const [, postId] = click.target.id.split("--")
            const foundLikeObj = likes.find(like => like.postId === parseInt(postId))
            deleteLike(foundLikeObj.id)
        }
    })




document.addEventListener("click",
    click => {
        if (click.target.id.startsWith("blockPost--")) {
            const [, postId] = click.target.id.split("--")
            deletePost(parseInt(postId))
        }
    })
