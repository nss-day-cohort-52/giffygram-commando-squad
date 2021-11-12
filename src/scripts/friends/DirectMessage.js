export const buildMessage = (message) => {
            return `<div class="direct_messages">
                        <div class="sender"> from ${message.senderId} </div>
                        <div class="message"> ${message.message} </div>
                        </div>
                    </div>`
        }
        





let notificationIconClicked = null

document.addEventListener("click", clickEvent => {
    // if the notification button is clicked
    if (clickEvent.target.id === "notification_count") {
    //we need to open the notification block
        notificationIconClicked = 1
        //dispatch an event that will rerender the page
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

