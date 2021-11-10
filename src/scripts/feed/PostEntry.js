export const PostEntry = () => {
    return `
    <div class="postForm">
        <form>
            <fieldset>
                <input type="text" name="title" autofocus placeholder="Title" />
            </fieldset>
            <fieldset>
                <input type="url" name="url" placeholder="URL of gif" />
            </fieldset>
            <fieldset>
                <input type="text" name="description" placeholder="Story behind your gif..." />
            </fieldset>
        </form>
        <button id="saveGif">Save</button>
        <button id="cancelGif">Cancel</button>
    </div>
`
}

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveGif") {
        const title = document.querySelector("input[name='title']").value
        const url = document.querySelector("input[name='url']").value
        const description = document.querySelector("input[name='description']").value
    }
})
