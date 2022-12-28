import { makeHome } from "./home";

function switchContent(initialSetting) {
    const main = document.querySelector('.main')
    const mainChild = document.querySelector('.main > *')

    if (mainChild) {
        mainChild.remove()
    }

    let setting
    if (this) {
        setting = this.textContent
    } else {
        setting = initialSetting
    }
    
    switch (setting) {
        case 'Home':
            const home = makeHome()
            main.appendChild(home)
            break;
    
        default:
            break;
    }
}

export {switchContent}