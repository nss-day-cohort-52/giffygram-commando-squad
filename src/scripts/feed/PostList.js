// Write a function that will map over our posts array and generate all the posts at HTMl (use the function we wrote in Post.js as the callback function for the .map method)

import { getPosts } from "../data/provider.js"
import { buildPost } from "./Post.js"

export const PostList = () => {
    const posts = getPosts()
    let html = ""
    const postsArr = posts.map(buildPost)
    html += postsArr.join("")
    return html
}