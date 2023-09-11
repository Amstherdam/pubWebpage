
const createContactPage= () => { 
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')

    const contactContainer = document.createElement('div')

    contactContainer.textContent = 'deneme'

    pageContent.appendChild(contactContainer)
    content.appendChild(pageContent)
}

export default createContactPage