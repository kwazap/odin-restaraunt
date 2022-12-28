import { makeHome } from "./home";
import { makeContact } from "./contact"; 
    
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
        case 'Contact':
            const contact = makeContact()
            main.appendChild(contact)
            break;
    
        default:
            break;
    }
}

export {switchContent}