const posts = [
    {
        name: "BUGGATI",
        username: "BUGGATI",
        location: "USA",
        avatar: "images/buggati.png",
        post: "images/buggati.png",
        comment: "Super cars is here",
        likes: 210000
    },
    {
        name: "Unkown",
        username: "Unkown",
        location: "USA",
        avatar: "images/buggati2.jpg",
        post: "images/buggati2.jpg",
        comment: "The beast is here",
        likes: 5000000
    },
        {
        name: "Mclaren",
        username: "Mclaren",
        location: "Paris, France",
        avatar: "images/mclaren.png",
        post: "images/mclaren.png",
        comment: "Crazy Power Baby",
        likes: 3500000
    }
]


const allpost = document.getElementById("all-post");

function RenderPost() {
    for(let i=0; i<posts.length;i++) {
        allpost.innerHTML += `
        <section class="post">
        <div class="user-info">
            <img id="avatar-el" src="${posts[i].avatar}">
            <div class="text-info">
                <h2 id="username-el">${posts[i].username}</h2>
                <h3 id="location-el">${posts[i].location}</h3>
            </div>
        </div>

        <div class="post-body">
            <img id="img-el" class="post-img" src="${posts[i].post}" alt="selfie of vincent van gogh">
            <div class="post-icons">
                <img class="icon fav-btn" src="images/fav_empty.png">
                <img class="icon bubble-btn" src="images/bubble-chat-empty.png">
                <img class="icon send-btn" src="images/send.png">
            </div>
            <div class="post-text">
                <p id="likes-el">${posts[i].likes} likes</p>
                <p id="comments-el"><strong>${posts[i].username}</strong> ${posts[i].comment} </p>
            </div>
        </div>
    </section>
`
}
}

RenderPost()

const favBtn = document.querySelectorAll(".fav-btn")
const bubbleBtn = document.querySelectorAll(".bubble-btn")
const sendBtn = document.querySelectorAll(".send-btn")


favBtn.forEach(favBtn => {
    favBtn.addEventListener("mouseover", function() {
        favBtn.src = "images/fav_fill.png"
    })
    
    favBtn.addEventListener("mouseout", function() {
        favBtn.src = "images/fav_empty.png"
    })
});

bubbleBtn.forEach(bubbleBtn => {
    bubbleBtn.addEventListener("mouseover", function() {
        bubbleBtn.src = "images/bubble-chat.png"
    })
    
    bubbleBtn.addEventListener("mouseout", function() {
        bubbleBtn.src = "images/bubble-chat-empty.png"
    })
});

sendBtn.forEach(sendBtn => {
    sendBtn.addEventListener("mouseover", function() {
        sendBtn.src = "images/send_fill.png"
    })
    
    sendBtn.addEventListener("mouseout", function() {
        sendBtn.src = "images/send.png"
    })
});
