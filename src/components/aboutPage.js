
const createAboutPage = () => { 
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')

    const aboutContainer = document.createElement('div')
    aboutContainer.setAttribute('id', 'aboutContainer')

    const aboutBackgroundImgDiv = document.createElement('div')
    const aboutBackgroundImg = document.createElement('img')
    aboutBackgroundImg.src = './image/aboutPic.jpg';
    aboutBackgroundImg.setAttribute('id', 'aboutBackgroundImg')

    const aboutTextDiv = document.createElement('div');
    const aboutTextH = document.createElement('h2');
    const aboutTextP = document.createElement('p');
    
    aboutTextDiv.setAttribute('id', 'aboutTextDiv')
    aboutTextH.setAttribute('id', 'aboutTextH')
    aboutTextP.setAttribute('id', 'aboutTextP')

    aboutTextH.textContent = 'ABOUT'
    aboutTextP.textContent = 'One of craftsmanship and authenticity. Of dimly lit encounters, great conversation & hand drawn ales. Well informed Barkeeps will guide the most discerning of taste buds. Creating carefully crafted cocktails and pouring a wide range of Bourbon and Rye Whiskey.'

    aboutTextDiv.appendChild(aboutTextH)
    aboutTextDiv.appendChild(aboutTextP)
    
    aboutBackgroundImgDiv.appendChild(aboutBackgroundImg)

    aboutContainer.appendChild(aboutBackgroundImgDiv);
    aboutContainer.appendChild(aboutTextDiv)
    pageContent.appendChild(aboutContainer)
    content.appendChild(pageContent)

}

export default createAboutPage