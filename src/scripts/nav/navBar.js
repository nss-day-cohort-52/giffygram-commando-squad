export const navBar = () =>{
    
    return `
    <nav class="navigation">
            <div class="navigation__item navigation__icon">
                <img src="images/pb.png" alt="Giffygram icon" id="logo">
            </div>
            <div class="navigation__item navigation__name">
                Giffygram
            </div>
            <div class="navigation__item navigation__search">

            </div>
            <div class="navigation__item navigation__message">
                <img id="directMessageIcon" src="images/fountain-pen.svg" alt="Direct message">
                <div class="notification__count">
                    0
                </div>
            </div>
            <div class="navigation__item navigation__logout">
                <button id="logoutButton" class="fakeLink">Logout</button>
            </div>
        </nav>`
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


