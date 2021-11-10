const API = "http://localhost:8088"
const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
    users: [],
    messages: [],
    likes: [],
    posts: []
}

export const fetchData = () => {
    fetch(`${API}/users`)
        .then(response => response.json())
        .then(
            (users) => {
                applicationState.users = users
            }
        )
    fetch(`${API}/messages`)
        .then(response => response.json())
        .then(
            (messages) => {
                applicationState.messages = messages
            }
        )
    fetch(`${API}/likes`)
        .then(response => response.json())
        .then(
            (likes) => {
                applicationState.likes = likes
            }
        )
    return fetch(`${API}/posts`)
        .then(response => response.json())
        .then(
            (posts) => {
                applicationState.posts = posts
            }
        )
}

export const getPosts = () => {
    return applicationState.posts.map(post => ({ ...post }))
}
export const getUsers = () => {
    return applicationState.users.map(user => ({ ...user }))
}
export const getLikes = () => {
    return applicationState.likes.map(like => ({ ...like }))
}
export const getMessages = () => {
    return applicationState.messages.map(message => ({ ...message }))
}