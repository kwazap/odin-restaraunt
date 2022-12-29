import CamembertImg from './images/camembert.jpg'
import RoquefortImg from './images/roquefort.jpg'
import BluImg from './images/blu.jpg'
import FonduImg from './images/fondu.jpg'
import GranaPadanoImg from './images/grana-padano.jpg'

const makeMenu = function () {
    const menu = document.createElement('div')
    menu.className = 'menu-container'

    const menuWrapper = document.createElement('div')
    menuWrapper.className = 'menu-wrapper'
    menu.appendChild(menuWrapper)


    const menuItems = {
        Camembert: {
            image: CamembertImg,
            name: 'Camembert',
            description: "Ut suscipit elit vel tempor congue. Aliquam rhoncus, lorem a fringilla tempor, turpis nisl interdum augue, et sagittis urna tellus nec neque. In pulvinar sem at lectus tincidunt dapibus."
        },
        Roquefort: {
            image: RoquefortImg,
            name: 'Roquefort',
            description: "Vivamus ornare nisi a nisi varius, sed rutrum lectus viverra. Maecenas bibendum orci quis nunc gravida semper. Mauris interdum risus et maximus sodales. Vestibulum ultricies ex in tempor vestibulum. Ut sit amet turpis posuere, molestie dolor vel, rutrum lorem."
        },
        Blu: {
            image: BluImg,
            name: 'Blu',
            description: "Nullam eget hendrerit eros. Morbi luctus bibendum enim, in dignissim magna tempus non. Fusce nibh lectus, sollicitudin sed lacinia in, sodales a neque. In vestibulum fermentum felis vitae finibus."
        },
        Fondu: {
            image: FonduImg,
            name: 'Fondu',
            description: "Quisque vel commodo metus. Proin venenatis elementum sem vel feugiat. Fusce facilisis nisi a leo iaculis, id ultrices eros posuere."
        },
        GranaPadano: {
            image: GranaPadanoImg,
            name: 'Grana Padano',
            description: "Nunc aliquam vehicula quam, a iaculis mauris suscipit fermentum. Pellentesque accumsan, urna ac commodo hendrerit, justo ipsum viverra justo, vel convallis quam sapien eu arcu."
        },
    }

    for (const item in menuItems) {
        const menuItemWrapper = document.createElement('div')
        menuItemWrapper.className = 'menu-item'
        menuWrapper.appendChild(menuItemWrapper)

        const itemImage = new Image()
        itemImage.src = menuItems[item].image
        menuItemWrapper.appendChild(itemImage)

        const textWrapper = document.createElement('div')
        textWrapper.className = 'menu-item-text-wrapper'
        menuItemWrapper.appendChild(textWrapper)

        const itemName = document.createElement('h4')
        itemName.textContent = menuItems[item].name
        textWrapper.appendChild(itemName)

        const itemDescription = document.createElement('div')
        itemDescription.textContent = menuItems[item].description
        textWrapper.appendChild(itemDescription)
    }

    return menu
}

export { makeMenu }