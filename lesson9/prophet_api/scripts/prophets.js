const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

let results = null;

async function getProphetData(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayProphets(data.prophets);
    };
}

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards');
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const birthDate = document.createElement('p');
        const birthPlace = document.createElement('p');
        const portrait = document.createElement('img');

        // Enter text content for the new elements
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent =  `Place of Birth: ${prophet.birthplace}`;

        // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getProphetData(url);