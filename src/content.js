
const makeMain = function () {
    const content = document.createElement('div')
    content.className = 'main'

    const credits = document.createElement('div') 
    credits.className = 'credits'
    content.appendChild(credits)
    
    const creditsLink = document.createElement('a')
    creditsLink.href = 'https://unsplash.com/@desertroseco'
    creditsLink.textContent = 'Background by Aleisha Kalina on unsplash'
    credits.appendChild(creditsLink)    

    return content
}

export {makeMain}