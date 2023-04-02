function initializeObservers() {
    let items = document.querySelectorAll(".intersect");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(entry);
                entry.target.classList.add("observed");
            }
        })
    },
    {
            threshold: 0.75, //passed the center of the element
    });

    items.forEach(item => {
        observer.observe(item);
    });
}