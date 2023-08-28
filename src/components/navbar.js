/* Create navbar anad navbar's inside items */

let contentDiv = document.getElementById('content');

let navbarItems = [ 'Home', 'Menu', 'About', 'Contant' ]

const navbarDiv = document.createElement('div')
navbarDiv.classList.add('navbar')

navbarItems.forEach(item => { 
    
    let navbarP = document.createElement('a')
    navbarP.innerHTML = item;

    
    navbarDiv.appendChild(navbarP)
    contentDiv.appendChild(navbarDiv)
 
})

const contentVideo = document.createElement('video'); 

/* Bu kısmı yorum satırından  kaldırınca navbar  elemanlarının hover 
ozellıklerı fılan bozuluyor, normalde videonunda oynamasi lazim ama oynamiyor  */

/* Eventlıstener dısında baslatınca  */

contentVideo.src = './video/coctailVideo2.mp4'
 

/* document.addEventListener('load', () => { 
    
}); */

    contentVideo.autoplay = true;
    contentVideo.loop = true;
    contentVideo.style.maxWidth = 'auto';
    contentVideo.style.height = 'auto';

contentDiv.appendChild(contentVideo);


export default {
    navbarItems,
    contentDiv
}

