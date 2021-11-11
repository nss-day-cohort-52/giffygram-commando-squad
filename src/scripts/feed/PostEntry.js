import { savePost } from "../data/provider.js"

let postButtonClicked = null

document.addEventListener("click",
event => {
    if (event.target.id === "postBtn") {
        postButtonClicked = 1
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

document.addEventListener("click",
event => {
    if (event.target.id === "cancelGif") {
        postButtonClicked = null
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveGif") {
        const title = document.querySelector("input[name='title']").value
        const url = document.querySelector("input[name='url']").value
        const description = document.querySelector("input[name='description']").value
        const date = new Date()
        const userId = parseInt(localStorage.getItem("gg_user"))

        const userPost = {
            title: title,
            url: url,
            description: description,
            date: date.toLocaleDateString("en-US"),
            userId: userId
        }
        savePost(userPost)
    }
})

export const PostEntry = () => {
    if (postButtonClicked) {
        return `
        <div class="postForm">
            <form>
                <fieldset class="fieldset">
                    <input type="text" name="title" autofocus placeholder="Title" />
                </fieldset>
                <fieldset class="fieldset">
                    <input type="url" name="url" placeholder="URL of gif" />
                </fieldset>
                <fieldset class="fieldset">
                    <input type="text" name="description" placeholder="Story behind your gif..." />
                </fieldset>
            </form>
            <button id="saveGif">Save</button>
            <button id="cancelGif">Cancel</button>
        </div>
    `
    } else {
        return `<div class="miniMode" id="postBtn">Have a gif to post?</div>`
    }
}
