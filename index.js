const main = document.getElementById('main');
const allcards = document.createElement('div');
main.appendChild(allcards);
allcards.classList.add('all-cards');
fetch("https://jsonplaceholder.typicode.com/photos")
    .then(function(resp) {
        return resp.json();
    }).then(function(data) {
        for (let i = 0; i < 200; i++) {
            const cardItem = document.createElement('div');
            const containerForCardItem = document.createElement('div');
            const image = document.createElement('img');
            allcards.appendChild(cardItem);
            cardItem.classList.add('card-item');
            cardItem.appendChild(containerForCardItem);
            containerForCardItem.append(image);
            image.classList.add('card-image');
            const cardItemTitle = document.createElement('div');
            const title = document.createElement("h2");
            title.innerHTML = data[i].title;
            cardItemTitle.appendChild(title);
            const cardItemBrief = document.createElement('div');
            const firstBrief = document.createElement("p")
            firstBrief.innerHTML = data[i].title;
            const secondBrief = document.createElement("p")
            secondBrief.innerHTML = data[i].title;
            cardItemBrief.appendChild(firstBrief);
            cardItemBrief.appendChild(secondBrief);
            containerForCardItem.appendChild(cardItemTitle);
            containerForCardItem.appendChild(cardItemBrief);
            cardItemBrief.classList.add('card-item-title');
            const cardItemButton = document.createElement('div');
            const cardButton = document.createElement('button');
            containerForCardItem.appendChild(cardItemButton);
            cardItemButton.classList.add('button-for-image');
            cardItemButton.appendChild(cardButton);
            cardButton.innerHTML = 'Button';
            cardButton.classList.add('card-button');
            cardButton.setAttribute('id', i);
            cardButton.setAttribute('onclick', `addEvent(${i})`);
            document.querySelectorAll('img')[i].setAttribute('src', data[i].url);
        }
    });
const addEvent = (elementId) => {
    const numberOfcards = document.getElementsByClassName('card-item').length;
    if (document.getElementsByClassName('card-item')[elementId].classList.contains('background-for-card'))
        document.getElementsByClassName('card-item')[elementId].classList.remove('background-for-card');
    else {
        for (let i = 0; i < numberOfcards; i++) {
            if (document.getElementsByClassName('card-item')[i].classList.contains('background-for-card'))
                document.getElementsByClassName('card-item')[i].classList.remove('background-for-card');
        }
        document.getElementsByClassName('card-item')[elementId].classList.add('background-for-card');
    }
};