import { getUsers, setRecipient, saveMessage, getFeed } from "../data/provider.js"

const users = getUsers()

export const MessageUsers = () => { // eporting the desired html to the page
    const users = getUsers()
    let html = ""
    // the fx below it the recipient drop down
    html += ` <div> <label> Recipient: </label> </div>
    <select id="recipient"> 
    <div><option value="0">Choose your friend </option> </div>
    `
    for (const user of users) {
        html += `<option value="${user.id}" > ${user.name} </option>`
    }

    html += "</select></div>"
    // here we start the input field gor messages
    html += `<div class="field">
<label class="label" for="Message box">What are you thinking?</label> </div>
<div><textarea type="text" name="Message" class="textarea"> </textarea>
</div>`

    html += `<button id = "send" type="button">send</button>
<button class = "cancel" type="button">cancel</button>`
    return html
}

// save/ cancle buttons needed 

document.addEventListener(
    "click",
    (clickEvent) => {
        const feed = getFeed()
        if (clickEvent.target.id === "send") {
            const senderId = localStorage.getItem("gg_user")
            const recipientId = feed.recipientid
            const message = document.querySelector("textarea[name='Message']").value

            const userMessage = {
                senderId: parseInt(senderId),
                recipientId: recipientId,
                message: message,
            }
            saveMessage(userMessage)
        }
    }
)

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "recipient") {
            const recipientId = changeEvent.target.value
            setRecipient(parseInt(recipientId))
        }
    }
)

