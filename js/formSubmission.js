function formSubmit() {
    let url = window.location.href;
    if (url.includes("?")) {
        let parameters = url.split("?")[1].split("&");
        for (let i = 0; i < parameters.length; i++) {
            let [key, val] = parameters[i].split("=");
            
            if (key === "ThankYou" && val === "1") {
                alert("Thanks! The email was submitted successfully. I'll get back to you as soon as possible! 😄");
            }
        }
    }
}