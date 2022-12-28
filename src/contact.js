

const makeContact = function () {
    
    const contact = document.createElement('div')
    contact.className = 'contact-container'

    const contactWrapper = document.createElement('div')
    contactWrapper.className = 'contact-wrapper'
    contact.appendChild(contactWrapper)

    const contactHeading = document.createElement('h2')
    contactHeading.textContent = 'Contact'
    contact.appendChild(contactHeading)

    const contactInfo = document.createElement('div')
    contactInfo.className = '.contact-info'
    contact.appendChild(contactInfo)

    const emailHeading = document.createElement('h3')
    emailHeading.textContent = 'Email:'
    contactInfo.appendChild(emailHeading)

    const email = document.createElement('div')
    email.textContent = 'bestrestaurant@host.com'
    contactInfo.appendChild(email)

    const addressHeading = document.createElement('h3')
    addressHeading.textContent = 'Address:'
    contactInfo.appendChild(addressHeading)

    const address = document.createElement('div')
    address.textContent = 'Ipsum Street 283g, 12700 Loremburg'
    contactInfo.appendChild(address)

    const telephoneHeading = document.createElement('div')
    telephoneHeading.textContent = 'Telephone:'
    contactInfo.appendChild(telephoneHeading)

    const telNumber = document.createElement('div')
    telNumber.textContent = '+381 11 LOREM IPSUM'
    contactInfo.appendChild(telNumber)

    const workingHours = {
        Monday: '11:00 - 23:00',
        Tuesday: '11:00 - 23:00',
        Wednesday: '11:00 - 23:00',
        Thursday: '11:00 - 23:00',
        Friday: '11:00 - 23:00',
        Saturday: '11:00 - 23:00',
        Sunday: '11:00 - 23:00'
    }

    const workingHoursHeading = document.createElement('h2')
    workingHoursHeading.textContent = 'Working Hours'
    contact.appendChild(workingHoursHeading)

    const workingHoursWrapper = document.createElement('div')
    workingHoursWrapper.className = 'working-hours-wrapper'
    contact.appendChild(workingHoursWrapper)

    for (const day in workingHours) {
        const weekday = document.createElement('h4')
        weekday.textContent = day
        workingHoursWrapper.appendChild(weekday)

        const workingHours = document.createElement('div')
        workingHours.textContent = workingHours[day]
        workingHoursWrapper.appendChild(workingHours)
    }

    return contact
}