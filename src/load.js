import { makeHeader } from "./header"
import { makeMain } from "./content"
import { switchContent } from "./switch"

const loadPage = function (params) {
    const container = document.querySelector('.content')

    const header = makeHeader()
    container.appendChild(header)

    const main = makeMain()
    container.appendChild(main)

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', switchContent)
    })
}


export {loadPage}