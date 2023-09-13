
const createHomePage = () =>  {
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')

    const cocktailVideo = document.createElement('video'); 
    cocktailVideo.setAttribute('id', 'cocktailVideo')
    cocktailVideo.autoplay = true;
    cocktailVideo.loop = true;
    cocktailVideo.style.maxWidth = 'auto';
    cocktailVideo.style.height = 'auto';

    const cocktailVideoSource = document.createElement('source');
    cocktailVideoSource.src = './video/cocktailVideo.mp4'
    cocktailVideoSource.type = 'video/mp4'

    // Append created items
    cocktailVideo.appendChild(cocktailVideoSource);
    pageContent.appendChild(cocktailVideo);

    // Create home page text
    const cocktailTextDiv = document.createElement('div');
    cocktailTextDiv.setAttribute('id', 'cocktailTextDiv');

    const cocktailTextHeader = document.createElement('h2');
    cocktailTextHeader.setAttribute('id', 'cocktailTextHeader')
    cocktailTextHeader.textContent = 'Welcome the onlyCocktail'

    const cocktailTextP = document.createElement('p');
    cocktailTextP.setAttribute('id', 'cocktailTextP');
    cocktailTextP.textContent = 'onlyCocktail drinks have always been vehicles for stories– be it about the cultures that inspire them, the ingredients that bring them to fruition, or the spirits themselves, carefully crafted by masters around the region. Come by the onlyCocktail bar for a drink and trace its history with us.';

    

    pageContent.appendChild(cocktailTextDiv);
    cocktailTextDiv.appendChild(cocktailTextHeader);
    cocktailTextDiv.appendChild(cocktailTextP)
    content.appendChild(pageContent)

}

export default createHomePage;

