

const createMenuPage = () => {
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')

    const promotionDiv = document.createElement('div');
    promotionDiv.setAttribute('id', 'promotionDiv')

    let cocktailArr = [ 'Manhattan', 'Negroni', 'Martini', 'Daiquiri', 'WhiskeySour', 'Sazerac', 'Paloma', 'Sidecar', 'Mojito', 'BloodyMary', 'Gimlet', 'Margarita',  ]

    cocktailArr.forEach(item => { 
        let cocktailSection = item
        cocktailSection = document.createElement('div')
        cocktailSection.setAttribute('id', item)
        cocktailSection.classList.add('promotionCocktailSections')

        const cocktailSectionText = document.createElement('div')
        cocktailSectionText.classList.add('cocktailSectionText')
        const cocktailSectionP = document.createElement('p')
        cocktailSectionP.classList.add('cocktailSectionP')
        cocktailSectionP.setAttribute('id', item+'P')

        const promotionHeader = document.createElement('h2')
        promotionHeader.classList.add('cocktailHeader')
        promotionHeader.innerHTML = item ;

        const cocktailImageDiv = document.createElement('div')
        cocktailImageDiv.classList.add('cocktailImageDiv')
        const cocktailImage = document.createElement('img')
        cocktailImage.classList.add('cocktailImg')
        cocktailImage.setAttribute('id', item+'Img')
        
        cocktailImageDiv.appendChild(cocktailImage)
        cocktailSectionText.appendChild(promotionHeader)
        cocktailSectionText.appendChild(cocktailSectionP)
        cocktailSection.appendChild(cocktailSectionText)
        cocktailSection.appendChild(cocktailImageDiv)
        promotionDiv.appendChild(cocktailSection)
 
    })

    pageContent.appendChild(promotionDiv)
    content.appendChild(pageContent)


    document.getElementById('ManhattanP').innerHTML = "Amazingly, the drink that socialites tipped to their lips in the 19th century looks and tastes pretty much the same as the one served today at any decent cocktail bar. The Manhattan's mix of American whiskey and Italian vermouth, enlivened with a few dashes of aromatic bitters, is timeless and tasty—the very definition of what a cocktail should be."
    document.getElementById('ManhattanImg').src = './image/Manhattan.jpg'

    document.getElementById('NegroniP').innerHTML = 'Refreshingly bitter, the Negroni is said to have been invented in Florence by the dauntless Italian Count Camillo Negroni in the early 20th century. While at Bar Casoni in Florence, he demanded that the bartender strengthen his favorite cocktail, the Americano, by replacing the usual soda water with gin. To further differentiate the drink, the bartender also employed an orange peel rather than the typical lemon peel.'
    document.getElementById('NegroniImg').src = './image/Negroni.jpg'

    document.getElementById('MartiniP').innerHTML = "The Martini is known for its allure and sophistication, but its origins are muddled at best. The formula appeared in print under several different names around the turn of the 20th century. Made traditionally with gin (although vodka is a frequent substitute), dry vermouth, and orange bitters, it's a cocktail that ignites the imagination."
    document.getElementById('MartiniImg').src = './image/Martini.jpg'

    document.getElementById('DaiquiriP').innerHTML = 'Perhaps one of the most well-known rum cocktails ever created, the Daiquiri has gone through ups and downs over its 100+ year history. Here’s everything you need to know about this iconic drink, and how to mix it right.The blender has certainly put its stamp on the Daiquiri, but this profoundly simple drink is at its best when it stays clear of a steel blade. Simply shake up rum, simple syrup and a blast of fresh lime juice, and you have the most perfect of citrusy cocktails.'
    document.getElementById('DaiquiriImg').src = './image/daiquiri.jpg'

    document.getElementById('WhiskeySourP').innerHTML = '“Egg white or no?” is the most important decision you’ll need to make with this cocktail. When the recipe for this cocktail first appeared in 1862 in the famed Jerry Thomas Bartender’s Guide, it called for an egg white to be shaken along with whiskey, lemon juice, and simple syrup, taming the tartness and giving the drink a richer texture. In modern times, however, it’s common for the egg to be left out. Our suggestion: Try it both ways and find out which you prefer.'
    document.getElementById('WhiskeySourImg').src = './image/WhiskeySour.jpg'

    document.getElementById('SazeracP').innerHTML = 'Ever been to New Orleans? If so, then you’ve probably had this cocktail. Created in the mid-1800s at the Sazerac Coffee House in the storied Crescent City, the Sazerac is a complex concoction that starts with an absinthe rinse. Rye whiskey (originally cognac, but that swap happened pretty early), bitters (most often Peychaud’s), and a sugar cube create a boozy yet fragrant sipper.'
    document.getElementById('SazeracImg').src = './image/Sazerac.jpg'

    document.getElementById('PalomaP').innerHTML = 'It may get overshadowed by the Margarita stateside, but this is Mexico’s favorite cocktail. Drink snobs will tell you the tequila should be joined in the glass by freshly squeezed grapefruit juice and club soda, with a squeeze of lime, but we’ve tried it both ways and can assure you that the standard way of making the drink, with grapefruit soda (and, yes, that same squeeze of lime) is every bit as delicious. '
    document.getElementById('PalomaImg').src = './image/Paloma.jpg'

    document.getElementById('SidecarP').innerHTML = 'It’s now common practice to sip cognac neat. It sure does shine that way. But you’ll gain a new appreciation for the remarkably versatile French spirit after you try it in this citrusy cocktail, a mixture of cognac, fresh lemon juice, and the orange liqueur Cointreau. Don’t balk at the sugar-coated rim: It’s there to mask the Sidecar’s wicked tongue.'
    document.getElementById('SidecarImg').src = './image/Sidecar.jpg'

    document.getElementById('MojitoP').innerHTML = 'This Cuban classic calls for combining unaged white rum, lime juice, muddled mint leaves, and sugar before topping it all with club soda. It’s a refreshing drink that provides a blast of flavor to take you straight into the Caribbean tropics, as perfect at a party as it is poolside.'
    document.getElementById('MojitoImg').src = './image/Mojito.jpg'

    document.getElementById('BloodyMaryP').innerHTML = 'It’s a hangover cure, a nutritious breakfast, an airport bar staple. This tomato- and vodka-based classic, created in Paris in the 1920s, is one of those drinks every city, every bar, and every bartender makes their own way. If you’ve only ever had it with bottled mix and a fridgeful of garnishes, try a more traditional version with Worcestershire sauce, horseradish, and celery salt, plus good vodka and tomato juice. The drink’s balance may surprise you.'
    document.getElementById('BloodyMaryImg').src = './image/BloodyMary.jpg'

    document.getElementById('GimletP').innerHTML = 'Believed to have been created by British sailors (as many of the oldest cocktails were) as a way to prevent scurvy, this drink mixes a clear spirit, lime juice, and simple syrup to create a refreshing (and vitamin C-filled) cocktail. The original used gin as its base, while the vodka-based variation has since greatly surpassed it in popularity. Either one is worth a spot in your summertime heavy cocktail rotation.'
    document.getElementById('GimletImg').src = './image/Gimlet.jpg'

    document.getElementById('MargaritaP').innerHTML = 'You’ve probably had a bad Margarita. Or more than one. But when this zesty classic is made correctly—with quality tequila, orange liqueur, and lime juice—the drink carries itself upright. The history of the Margarita is deep: Its progenitor, the Tequila Daisy, has been around since the 1930s, when there were no bottled mixes. Or blenders. The drink has come a long way, but finding your way back to its earliest incarnations is key to appreciating it.'
    document.getElementById('MargaritaImg').src = './image/Margarita.jpg'
}


export default createMenuPage
