
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
    cocktailTextHeader.textContent = 'Welcome the MixologyPub'

    const cocktailTextP = document.createElement('p');
    cocktailTextP.setAttribute('id', 'cocktailTextP');
    cocktailTextP.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et molestie tellus. Donec scelerisque leo dui, fringilla pulvinar purus elementum euismod. Sed aliquam congue pulvinar. Sed blandit, nisi quis hendrerit dictum, lacus tortor aliquam felis, in finibus mi eros in mi. Mauris quis lectus suscipit, auctor enim ut, vulputate lacus. In non urna ac risus rhoncus luctus. Praesent convallis metus erat, vel suscipit nisi blandit id. Nullam porta urna vitae dignissim iaculis.';

    

    pageContent.appendChild(cocktailTextDiv);
    cocktailTextDiv.appendChild(cocktailTextHeader);
    cocktailTextDiv.appendChild(cocktailTextP)
    content.appendChild(pageContent)

}

export default createHomePage;

