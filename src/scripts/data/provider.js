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
export const getFeed = () => {
    const feedCopy = Object.assign({}, applicationState.feed)
    return feedCopy
}
export const setRecipient = (id) => { // the id parameter bing passed in  because it is relying on the change event
    applicationState.feed.recipientid = id // this is creating Id to  put into custom ordrs
}
export const setChosenUser = (id) => {
    applicationState.feed.chosenUser = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const savePost = (userPost) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userPost)
    }


    return fetch(`${API}/posts`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            document.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const likePost = (likeObj) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(likeObj)
    }
    return fetch(`${API}/likes`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            document.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const saveMessage = (userMessage) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userMessage)
    }


    return fetch(`${API}/messages`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            document.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deletePost = (id) => {
    return fetch(`${API}/posts/${id}`, { method: "DELETE" })
        .then(
            () => {
                document.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
export const deleteLike = (id) => {
    return fetch(`${API}/likes/${id}`, { method: "DELETE" })
        .then(
            () => {
                document.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
