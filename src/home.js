

const makeHome = function () {
    
    const home = document.createElement('div')
    home.className = 'home-container'

    const homeWrapper = document.createElement('div')
    homeWrapper.className = 'home-wrapper'
    home.appendChild(homeWrapper)

    const homeH2 = document.createElement('h2')
    homeH2.textContent = 'Best wine and cheese restauraunt ever'
    homeWrapper.appendChild(homeH2)

    const homeDescript = document.createElement('p')
    homeDescript.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in gravida lorem. Cras ac volutpat neque. Ut consequat interdum turpis, ut aliquet dui faucibus ac. Etiam dapibus faucibus lectus faucibus suscipit. Aenean congue, elit et faucibus pretium, velit lorem pharetra augue, vel imperdiet turpis sapien porttitor ligula. Mauris at mauris sed urna sodales blandit.'
    homeWrapper.appendChild(homeDescript)

    home.appendChild(homeWrapper)


    return home
}

export { makeHome }