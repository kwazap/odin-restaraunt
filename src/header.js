
const makeHeader = function () {

    const header = document.createElement('div')
    header.className = 'header'

    const title = header.appendChild(document.createElement('h1'))
    title.textContent = 'Cheese Restaurant'

    const navWrapper = header.appendChild(document.createElement('div'))
    navWrapper.className = 'nav-wrapper'

    const homeButton = navWrapper.appendChild(document.createElement('button'))
    homeButton.className = 'home-button'
    homeButton.textContent = 'Home'
    
    const menuButton = navWrapper.appendChild(document.createElement('button'))
    menuButton.className = 'menu-button'
    menuButton.textContent = 'Menu'

    const contactButton = navWrapper.appendChild(document.createElement('button'))
    contactButton.className = 'contact-button'
    contactButton.textContent = 'Contact'

    return header

}


export {makeHeader}