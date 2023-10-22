const initLikes = 220;
const initDisLikes = 34;

let likesCount = initLikes
let dislikesCount = initDisLikes

let LikeBtn = document.getElementById("likeBtn");
let disLikeBtn = document.getElementById("dislikeBtn");

likeBtn.innerText = "👍" + likesCount
dislikeBtn.innerText = "👎" + dislikesCount


function doLike() {
    likesCount++;
    likeBtn.innerText = "👍 " + likesCount
    disableButtons();
    setCookie();
}

function doDisLike() {
    dislikesCount++;
    dislikeBtn.innerText = "👎 " + dislikesCount
    disableButtons();
    setCookie();
}

function disableButtons() {
    likeBtn.disabled = true;
    disLikeBtn.disabled = true;
}

function setCookie() {
    document.cookie = "voted=true; SameSite=Strict; Max-Age=" + 60
}


window.onload = function () {
    if (document.cookie && document.cookie.indexOf("voted") > -1) {
        disableButtons();
    }
}



