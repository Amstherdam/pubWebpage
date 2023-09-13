
const createContactPage= () => { 
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')

    const contactContainer = document.createElement('div')
    contactContainer.setAttribute('id', 'contactContainer')

    const contactImageDiv = document.createElement('div')
    const contactImage  = document.createElement('img')
    contactImageDiv.setAttribute('id', 'contactImageDiv')
    contactImage.src = './image/contact3.jpg'

    const contactMapDiv = document.createElement('div')
    contactMapDiv.setAttribute('id', 'contactMapDiv')
    const contactMap = document.createElement('iframe')
    contactMap.src = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17836.59484096518!2d-122.40534166276571!3d37.78782995943283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1694631535991!5m2!1str!2str'
    contactMap.width = '100%'
    contactMap.height = '100%'
    contactMap.style.borderRadius = '0px 30px 30px 0 '

    

    const contactContainerText = document.createElement('div')
    const contactContainerMap = document.createElement('div')

    contactContainerText.setAttribute('id', 'contactContainerText')
    contactContainerMap.setAttribute('id', 'contactContainerMap')

    contactMapDiv.appendChild(contactMap);

    contactImageDiv.appendChild(contactImage)
    contactContainer.appendChild(contactImageDiv)  
    contactContainer.appendChild(contactMapDiv) 
    pageContent.appendChild(contactContainer)
    content.appendChild(pageContent)
}

/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>*/

export default createContactPage