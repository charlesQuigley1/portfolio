function initializeObservers() {
    if("IntersectionObserver" in window){
        attachObservers();
      
    }
    else {
        killObservers();
    }
}

function attachObservers() {
    let items = document.querySelectorAll(".intersect");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("observed");
            }
        })
    },
    {
        rootMargin: '0px 0px -50px 0px',
        threshold: 1
    });

    items.forEach(item => {
        observer.observe(item);
    });

    let sections = document.querySelectorAll(".section");
    console.log(sections);

    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            console.log(entry.target);

            let navBarItems = document.querySelectorAll("#navBar li");
            for (let i = 0; i < navBarItems.length; i++) {
                if (entry.isIntersecting) {
                    if (navBarItems[i].classList[0] === entry.target.id) {
                        console.log(navBarItems[i].classList[0]);
                        navBarItems[i].classList.add("sectionActive");
                    }
                    else {
                        navBarItems[i].classList.remove("sectionActive");
                    }
                }
            }
        })
    },
    {
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.5
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

}

function killObservers() {
    let items = document.querySelectorAll(".intersect");
    items.forEach(item => {
        item.classList.add("noIntObs");
    });
}