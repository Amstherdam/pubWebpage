
 const createFooter = () => { 
    const content = document.querySelector('#content');
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer')

    // footer container 
    const footerContent = document.createElement('div')
    footerContent.setAttribute('id', 'footerContent')

   // img div inside footer
    const footerImgDiv = document.createElement('div')
    footerImgDiv.setAttribute('id', 'footerImgDiv')
    const footerImg = document.createElement('img')
    footerImg.setAttribute('id', 'footerImg')
    footerImg.src = "./image/cocktailLogo.png";

   //second div inside footer
   const footerSocialDiv = document.createElement('div')
   footerSocialDiv.setAttribute('id', 'footerSocialDiv');
   
   const socialArr = ['instagram', 'facebook', 'x', 'github']

   socialArr.forEach(item => {
      let socialIcon = item
      socialIcon = document.createElement('a')
      socialIcon.classList.add('socialIcon')
      socialIcon.setAttribute('id', item + 'A')

      const iconI = document.createElement('i')
      iconI.setAttribute('id', item)
      iconI.classList.add('footerIcon')

      socialIcon.appendChild(iconI)
      footerSocialDiv.appendChild(socialIcon)
   })

   const footerAdressAndNumberDiv = document.createElement('div')
   const footerAdressAndNumberDivH = document.createElement('h3')
   const footerAdressAndNumberDivP = document.createElement('p')
   const footerAdressAndNumberDivP2 = document.createElement('p')

   footerAdressAndNumberDiv.setAttribute('id', 'footerAdressContainer')
   footerAdressAndNumberDivH.setAttribute('id', 'numberAdressHeader')
   footerAdressAndNumberDivP.setAttribute('id', 'numberP')
   footerAdressAndNumberDivP2.setAttribute('id', 'address')

   footerAdressAndNumberDivH.textContent = 'Address & Number'
   footerAdressAndNumberDivP.textContent = '+99 999 99 999'
   footerAdressAndNumberDivP2.textContent = '678 Green St #3, San Francisco, CA 94133, USA'

   footerAdressAndNumberDiv.appendChild(footerAdressAndNumberDivH)
   footerAdressAndNumberDiv.appendChild(footerAdressAndNumberDivP)
   footerAdressAndNumberDiv.appendChild(footerAdressAndNumberDivP2)

   footerImgDiv.appendChild(footerImg)
   footerContent.appendChild(footerImgDiv)
   footerContent.appendChild(footerSocialDiv)
   footerContent.appendChild(footerAdressAndNumberDiv)
   footer.appendChild(footerContent)
   content.appendChild(footer);

   document.querySelector('#instagram').classList.add('fa-brands')
   document.querySelector('#instagram').classList.add('fa-instagram')
  
   document.querySelector('#facebook').classList.add('fa-brands')
   document.querySelector('#facebook').classList.add('fa-square-facebook')

   document.querySelector('#x').classList.add('fa-brands')
   document.querySelector('#x').classList.add('fa-square-x-twitter')

   document.querySelector('#githubA').setAttribute('href', 'https://github.com/Amstherdam')
   document.querySelector('#githubA').setAttribute('target', '_blank')
   document.querySelector('#github').classList.add('fa-brands')
   document.querySelector('#github').classList.add('fa-square-github')
 }

export default createFooter






