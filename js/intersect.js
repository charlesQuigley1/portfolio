function initializeObservers() {
    if("IntersectionObserver" in window){
        attachObservers();
        //killObservers();
    }
    else {
        killObservers();
    }
}

function attachObservers() {
    let items = document.querySelectorAll(".intersect");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            console.log(entry);
            if (entry.isIntersecting) {
                console.log(entry);
                entry.target.classList.add("observed");
            }
        })
    },
    {
        rootMargin: '0px 0px -50px 0px',
        threshold: 1, // 3/4 of the element is in view
    });

    items.forEach(item => {
        observer.observe(item);
    });

}

function killObservers() {
    let items = document.querySelectorAll(".intersect");
    items.forEach(item => {
        item.classList.add("noIntObs");
    });
}