/* Create navbar anad navbar's inside items */

import createHomePage from "./homePage";
import createMenuPage from "./menuPage";
import createFooter from "./footer";

const createNavbar = () => { 

const content = document.querySelector('#content')

    let navbarItems = ['Home', 'Menu', 'About', 'Contact'];

    const navbarDiv = document.createElement('div');
    navbarDiv.classList.add('navbar')

    navbarItems.forEach(item => { 

        let navbarA = document.createElement('a')
        navbarA.innerHTML = item

        navbarA.setAttribute('id', item)

        navbarDiv.appendChild(navbarA)
        content.appendChild(navbarDiv)

       navbarA.addEventListener('click', () => { 
        if(navbarA.id === 'Home') { 
            clearContent()
            createHomePage()
            
        }
        else if (navbarA.id === 'Menu') { 
            clearContent()
            createMenuPage()
            createFooter()
        }
        else if (navbarA.id === 'About') { 
            clearContent()

            createFooter()
        }
        else if (navbarA.id === 'Contact') { 
            clearContent()
                
            createFooter()
        }
       })
    })


}

function clearContent() { 
    const content = document.querySelector('#content')
    const pageContent = document.querySelector('.page-content');
    const footer = document.querySelector('#footer')
    if(pageContent) {
        content.removeChild(pageContent);
       if(footer) { 
        content.removeChild(footer)
       }
    }
}



export default createNavbar;


