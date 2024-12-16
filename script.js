let gameboard = document.getElementById('game-board');
let scoreElement = document.getElementById('score');
let currentScore = Number(scoreElement.innerText);
const viewportWidth = gameboard.clientWidth;
const viewportHeight = gameboard.clientHeight;

function generateCoOrdinates(){
    return {x:  Math.random() * (viewportWidth - 100), y: Math.random() * (viewportHeight - 100)};
}

function createClone(){
    let x = generateCoOrdinates()["x"];
    let y = generateCoOrdinates()["y"];
    let newShadowClone = document.createElement('div');

    newShadowClone.style.width = '100px';
    newShadowClone.style.height = '100px';
    newShadowClone.style.background = 'url("./images/clone\ img.jpg")';
    newShadowClone.style.backgroundSize = 'cover'
    newShadowClone.style.backgroundPosition = 'top center'
    newShadowClone.style.position = 'absolute';
    newShadowClone.style.left = `${x}px`;
    newShadowClone.style.top = `${y}px`;

    return newShadowClone;
}

function createRasengan() {
    let rasengan = document.createElement('div');

    
    rasengan.style.width = '50px';
    rasengan.style.height = '50px';
    rasengan.style.background = 'url("./images/rasengan.jpg")';
    rasengan.style.backgroundSize = 'cover'
    rasengan.style.backgroundPosition = 'center'
    rasengan.style.position = 'absolute';

    return rasengan;
}

function addRasenganToScreen(x, y, rasengan){
    let ras = rasengan;

    ras.style.top = y+"px";
    ras.style.left = x+"px";

    return ras;
}

function addEventToShadowClone(clone){
    clone.addEventListener('click', (event) => {

        let ras = createRasengan();
        
        let rasengan = addRasenganToScreen(event.pageX, event.pageY, ras);
        gameboard.appendChild(ras);

        clone.remove();
        updateScore();

        setInterval(() => {
            ras.remove()
        }, 100);
        
    
    })

    return clone;
}

function addNewCloneToGameboard(clone){
        gameboard.appendChild(clone);
}

function updateScore() {
    currentScore = currentScore + 100;
    score.textContent = currentScore;
}

setInterval(()=> {
    let newClone = createClone();
    addEventToShadowClone(newClone);
    addNewCloneToGameboard(newClone);

    
    //Destroys clone after being created
    setInterval(()=> {
        newClone.remove();
    }, 3000);

}, 500);
