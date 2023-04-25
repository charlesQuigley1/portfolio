function initializeObservers() {

    
    if("IntersectionObserver" in window && window.navigator.userAgent.indexOf("Edg") <= -1){
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

    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            let navBarItems = document.querySelectorAll("#navBar li");
            for (let i = 0; i < navBarItems.length; i++) {
                if (entry.isIntersecting) {
                    console.log(entry.target.id)
                    if (navBarItems[i].classList[0] === entry.target.id) {
                        for (let j = 0; j < navBarItems.length; j++) {
                            navBarItems[j].classList.remove("sectionActive");
                        }
                        navBarItems[i].classList.add("sectionActive");
                    }
                }
            }
        })
    },
    {
        rootMargin: '-50% 0px',
        threshold: 0
    });

    const sectionObserverMobile = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            let mobileNavBarItems = document.querySelectorAll("#mobile-navBar-slideOut li");
            for (let i = 0; i < mobileNavBarItems.length; i++) {
                if (entry.isIntersecting) {
                    if (mobileNavBarItems[i].classList[0] === entry.target.id) {
                        mobileNavBarItems[i].classList.add("sectionActive");
                    }
                    else {
                        mobileNavBarItems[i].classList.remove("sectionActive");
                    }
                }
            }
        })
    },
    {
        rootMargin: '-50% 0px',
        threshold: 0
    });

    

    sections.forEach(section => {
        sectionObserver.observe(section);
        sectionObserverMobile.observe(section);
    });

}

function killObservers() {
    let items = document.querySelectorAll(".intersect");
    items.forEach(item => {
        item.classList.add("noIntObs");
    });
}