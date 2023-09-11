
const createAboutPage = () => { 
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')

    const aboutContainer = document.createElement('div')

    aboutContainer.textContent = 'deneme'

    pageContent.appendChild(aboutContainer)
    content.appendChild(pageContent)
}

export default createAboutPage