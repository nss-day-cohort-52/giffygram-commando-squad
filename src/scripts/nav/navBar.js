export const navBar = () =>{
    
    return `
    <div class = "navigation">
    <h1>GiffyGram</h1>
    <button class = "notification__count" type="button">notification</button>
    <button class = "navigation__logout type="button" id = "logoutButton">logout</button>
    <button class = "navigation__message" type="button">messages</button>
    </div>`
}

// when clicked the page will render back to the login page

document.addEventListener("click", clickEvent => {
    // if the logout button is clicked
    if (clickEvent.target.id === "logoutButton") {
    //we need to log the user out
        localStorage.setItem("gg_user", null)
        //dispatch an event that will rerender the page
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

