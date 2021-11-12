// Write a function that will map over our posts array and generate all the posts at HTMl (use the function we wrote in Post.js as the callback function for the .map method)

import { getFeed, getPosts, setChosenUser } from "../data/provider.js"
import { buildPost } from "./Post.js"
export const PostList = () => {
    const posts = getPosts()
    const feed = getFeed()
    const postsByUser = posts.filter((post) => {
        return post.userId === feed.chosenUser
    })
    let html = ""
    if(feed.chosenUser === null) {
        const postsArr = posts.map(buildPost)
        html += postsArr.join("")
    }
    else {
        const filteredPostsArr = postsByUser.map(buildPost)
        html += filteredPostsArr.join("")
    }
    return html
}