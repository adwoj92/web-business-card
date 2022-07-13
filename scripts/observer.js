const heading1 = document.querySelector('#heading21');
const heading2 = document.querySelector('#heading22');
const heading3 = document.querySelector('#heading23');
const aboutMeWrapper = document.querySelector('.about-me-wrapper');
const workMainWrapper = document.querySelector('.work-main-wrapper');
const contactEmailButton = document.querySelector('.contact-button-wrapper');

const options = {
    root: null,
    threshold: 0,
    rootMargin: "-175px"
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.toggle("visible");
        observer.unobserve(entry.target);
    });
}, options);

observer.observe(heading1);
observer.observe(heading2);
observer.observe(heading3);
observer.observe(aboutMeWrapper);
observer.observe(workMainWrapper);
observer.observe(contactEmailButton);
