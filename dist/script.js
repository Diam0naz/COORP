
    let container = document.createElement('div');
    document.querySelector('body').appendChild(container) 
    container.style.border ='1px solid black'
    container.style.margin = "5px"
    container.style.height = "90vh"

    // Nav

    let naviGation = document.createElement('nav')

    naviGation.innerHTML = `
                           <!-- <img src="/dist/images/Elevate Your Screen With Stunning Anime Wallpaper In 4K Resolution.jpeg" > -->
                            <span>
                                Ilemona Utenoh
                            </span>
    
                            <ul>
                                <li>About Me</li>
                                <li>Contact Me</li>
                            </ul>`
    container.appendChild(naviGation)
    naviGation.style.background = 'lightgrey'
    naviGation.style.display = 'flex'
    naviGation.style.justifyContent = 'space-between'
    naviGation.style.alignItems = 'center'
    naviGation.style.padding = '5px'

    let span = naviGation.querySelector('span')
    span.style.color
    span.style.fontFamily = 'monospace'
    span.style.fontSize = '1.2em'
    span.style.fontWeight = '800'
    let ul = naviGation.querySelector('ul')
    ul.style.color = 'grey'
    ul.style.display = 'flex'
    ul.style.gap = '10px'
    ul.style.fontSize = '0.5em'
    ul.style.textAlign = 'center' 
    ul.style.cursor = 'pointer'
    
 


    // Header

    let Header = document.createElement('h1');
    Header.innerHTML='About Me'
    container.appendChild(Header)
    Header.style.borderBottom = '1px solid black'
    Header.style.margin = '1rem'
    Header.style.marginBottom = '0.2rem'
    Header.style.fontFamily = 'sans-serif'
    Header.style.fontWeight = '700'
    Header.style.fontSize = '.9rem'

    
    // Paragraph

    let paraGraph = document.createElement('div')
   // paraGraph.innerHTML = "I am Igala by tribe"
    container.appendChild(paraGraph)
    paraGraph.style.margin = '1rem'
    //paraGraph.style.border = '1px solid black'
    paraGraph.style.fontSize = '0.8em'
    paraGraph.style.padding = '5px'
    paraGraph.style.height = '70%'
    paraGraph.style.display = 'flex'
    paraGraph.style.justifyContent = 'space-between'
    paraGraph.style.alignItems = 'center'
    paraGraph.style.gap = '0.5rem'
    paraGraph.style.background = 'lightgrey'

    // Aside inside Paragragh for Quote

    paraGraph.innerHTML = 
                    `
                    <p>
                            I'm someone who's big on self-development,skill acquisition and personal growth.
                            Over the past three months I've been through thick and thin trying to discover 
                            and decipher the rudiments of web 2. It truly has been an amazing Journey because
                            of the institution that I'm currently being instructed at.
                            At first it was Hyper Text Mark-up Language - HTML and the importance of semantic use, 
                            seemed like magic to us first timers, then we wrote and wrote programmes till we 
                            thought I've reached my limit. No! it wasn't as we soon discovered Cascading Style Sheets - CSS
                            and it was a whole new ball-game! Flex, Grid, Responsiveness were the new challenges to battle
                            with and it was no easy feat grasping the core concepts that allow for such effective and beautiful
                            webpages to be created.
                            Presently learning the Core Concepts and implimentations of Javascript! This ones journey I do envision the future,
                            yes that is with me as the last man stanging when its all said and done, but to achieve that there would be a couple of
                            things that I must have to learn how this works, behaviours that would be termed "Unexpected or Unforseen" 
                            and then Hope for the best from there on out, but until I get there, There is a lot to cover and my curiosity might just get 
                            satiated why JAVASCRIPT FACINATES ME! 
                    </p>

                    <aside>
                        " Your Attitude determines your Altitude! "
                    </aside>`

    let quote = paraGraph.querySelector('aside')
    quote.style.height = '5rem'
    quote.style.width = '4rem'
    quote.style.fontSize = '0.7em'
    quote.style.padding = '5px'
 // quote.style.float = 'right'
    quote.style.border = '2px solid black'
    quote.style.background = 'lightgrey'
    quote.style.color = 'white'
    quote.style.borderLeft = 'white'
    quote.style.borderBottom = 'white'
    quote.style.fontWeight = '800'
    //quote.onmouseover = alert("My Motivation and Mantra")
    let text = paraGraph.querySelector('p')
    text.style.textAlign = 'center'
    text.style.fontSize = '0.7rem'
    text.style.width = '80%'
    text.style.color = 'grey'
    text.style.fontFamily = 'sansserif'
    
    
/* echo "# COORP" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:Diam0naz/COORP.git
git push -u origin main */

    