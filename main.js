
const observer = new IntersectionObserver(callbc, { threshold: .5 })
createObserver(['categories-container', 'title-container', 'img-container'], observer)


function createObserver(clases, observer) {
    clases.forEach(clas => {
        const items = document.querySelectorAll(`.${clas}`);

        items.forEach(item => {
            observer.observe(item)
        })
    })
}

function callbc(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target)
        }
    })
}



const thr = [.1, .2, .3, .4, .5, .6, .7, .8, .9, 1]

const headerObserver = new IntersectionObserver(cbs, { threshold: thr })

const header = document.querySelector('header');
function cbs(entries) {
    entries.forEach(entry => {

        const top = entry.boundingClientRect.top * -1 / 100

        if (top <= 0) {
            header.style.background = `rgba(300, 300, 300, 0)`
            return;
        }

        header.style.background = `rgba(300, 300, 300, ${top})`
    })
}

const title = document.querySelector('.title-container');

headerObserver.observe(title)

