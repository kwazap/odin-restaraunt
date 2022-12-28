import { makeHeader } from "./header"
import { makeMain } from "./content"

const loadPage = function (params) {
    const container = document.querySelector('.content')
    const header = makeHeader()
    const main = makeMain()
    container.appendChild(header)
    container.appendChild(main)

}


export {loadPage}