
import { getMessages } from "../data/provider.js"
import { buildMessage } from "./DirectMessage.js"

export const MessageList = () => {
    const messages = getMessages()
    let html = ""
    const messagesArr = messages.map(buildMessage)
    html += messagesArr.join("")
    return html
}