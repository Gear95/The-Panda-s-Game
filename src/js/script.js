document.addEventListener('DOMContentLoaded', () => {
    // Create main box
    let mainBox = document.createElement('div');
    mainBox.id = 'mainBox';
    document.body.appendChild(mainBox);
    //Create TitleBox and Title
    //Box
    let titleBox = document.createElement('div');
    titleBox.id = 'titleBox';
    mainBox.appendChild(titleBox);
    //Create Title Div
    let title = document.createElement('div');
    title.id = 'title';
    mainBox.appendChild(title);
    //Title
    let subTitleBox = document.createElement('h1');
    subTitleBox.textContent = 'The Panda\'s Games';
    title.appendChild(subTitleBox);
    //Subtitle
    let subTitle = document.createElement('p');
    subTitle.textContent = 'Welcome to Panda\'s Hunger Games, May the pandas be ever in your favor';
    title.appendChild(subTitle);
    //GameBox
    let gameSection = document.createElement('div');
    gameSection.id = 'gameSection';
    mainBox.appendChild(gameSection);
    //Image Container
    let imgContainer = document.createElement('div');
    imgContainer.id = 'imgContainer';
    gameSection.appendChild(imgContainer);
    //Image
    let imgDisplay = document.createElement('img');
    imgDisplay.src = imgChanger(0);
    imgContainer.appendChild(imgDisplay);
    //Counter Text
    let countertext = document.createElement('div');
    countertext.id = 'counterText';
    gameSection.appendChild(countertext);
    //Counter
    let counter = 0;
    let counterDisplay = document.createElement('p');
    counterDisplay.textContent = counter;
    countertext.appendChild(counterDisplay);
    function updateCounter() {
        counterDisplay.textContent = counter;
        imgDisplay.src = imgChanger(counter);
    }
    //Buttons Container
    let buttons = document.createElement('div');
    buttons.id = 'buttons';
    gameSection.appendChild(buttons);
    function createButton(text, id, onClick) {
        let button = document.createElement('button');
        button.textContent = text;
        button.id = id;
        button.addEventListener('click', onClick);
        buttons.appendChild(button);
    }
    createButton('-', 'subButton', () => {
        if (counter > 0) {
            counter--;
            updateCounter();
        }
    });
    createButton('+', 'addButton', () => {
        if (counter < 100) {
            counter++;
            updateCounter();
        } else {
            alert("Counter completed!");
        }
    });
    let cButtons = document.createElement('div');
    cButtons.id = 'cButtons';
    gameSection.appendChild(cButtons);
    function cButton(text, id, onClick) {
        let button = document.createElement('button');
        button.textContent = text;
        button.id = id;
        button.addEventListener('click', onClick);
        cButtons.appendChild(button);
    }

    cButton('R', 'resetButton', () => {
        counter = 0;
        updateCounter();
    });

    cButton('i', 'infoButton', () => {
        alert("Rules: Reach 100 points to win!");
    });

    cButton('1:00', 'timerButton', () => {
        //debugg
        //counter = 100;
        //updateCounter();
    });
});

function imgChanger(counter) {
    if (counter === 0) {
        return 'assets/img/lets_start.png';
    } else if (counter >= 100) {
        return 'assets/img/complete.png';
    } else {
        return 'assets/img/eat.png';
    }
}
