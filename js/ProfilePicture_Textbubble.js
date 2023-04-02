function initializeTextBubble() {
    let profilePic = document.querySelector("#hero_profilepic div img");
    profilePic.addEventListener("mouseover", (e) => {
        let txtOptions = ["Hello 👋", "Hi There! 😁", "Hey 👋", "Thank you for <br> checking out my page! 😄"];
        let txtBubble = document.querySelector("#profileTextBubble");
        txtBubble.innerHTML = txtOptions[Math.floor(Math.random() * txtOptions.length)];

        txtBubble.classList.add("showTextBubble");
    });

    profilePic.addEventListener("mouseout", (e) => {
        let txtBubble = document.querySelector("#profileTextBubble");
        txtBubble.classList.remove("showTextBubble");
    });
}