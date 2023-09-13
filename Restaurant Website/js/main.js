
// active navbar
document.addEventListener("DOMContentLoaded", function () {
    let nav = document.querySelector(".navigation-wrap");
    window.onscroll = function () {
        console.log("Now Scroll event is fired!"); // Debugging line
        if (document.documentElement.scrollTop > 20) {
            nav.classList.add("scroll-on");
        } else {
            nav.classList.remove("scroll-on");
        }
    }
});


// nav hide

// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            
            timer = setInterval(() => {
                current += increment; // Update current by adding increment
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 2212, 1000);
    counter("count2", 0, 2313, 2420);
    counter("count3", 0, 2423, 3323);
    counter("count4", 0, 2342, 2300);
});
