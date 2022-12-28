import { makeHome } from "./home";

function switchContent() {
    const main = document.querySelector('.main')
    const mainChild = document.querySelector('.main > *')

    if (mainChild) {
        mainChild.remove()
    }
    
    switch (this.textContent) {
        case 'Home':
            const home = makeHome()
            main.appendChild(home)
            break;
    
        default:
            break;
    }
}

export {switchContent}