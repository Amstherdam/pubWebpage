
 const createFooter = () => { 
    const content = document.querySelector('#content');
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer')

    const footerContent = document.createElement('div')
    footerContent.setAttribute('id', 'footerContent')

    const footerImgDiv = document.createElement('div')
    footerImgDiv.setAttribute('id', 'footerImgDiv')
    const footerImg = document.createElement('img')
    footerImg.setAttribute('id', 'footerImg')
    footerImg.src = "./image/cocktailLogo.png"

    footerImgDiv.appendChild(footerImg)
    footerContent.appendChild(footerImgDiv)
    footer.appendChild(footerContent)
    content.appendChild(footer);


 }

export default createFooter






