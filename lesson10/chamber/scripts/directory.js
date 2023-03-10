const toggleSwitch = document.getElementById("display-toggle");
const gridContent = document.getElementById("member-adds");

async function getDirectory(DisplayAsFunction) {
    try {
        const response = await fetch('data/memberAdds.json');
        if (response.ok) {
            const data = await response.json();
            DisplayAsFunction(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};
getDirectory(DisplayAsGrid);

function DisplayAsGrid(data) {
    data.members.forEach((element) => {
        const newMember = document.createElement('section');
        const companyName = document.createElement('h2');
        const address = document.createElement('ul');
        const street = document.createElement('li');
        const city = document.createElement('li');
        const phone = document.createElement('li');
        const website = document.createElement('li');
        const membership = document.createElement('li');
        const logo = document.createElement('img');

        const addressList = element.address[0];

        website.textContent = element.website;
        phone.textContent = `Phone Number: ${element.phoneNum}`
        companyName.textContent = element.name;
        street.textContent = addressList.street;
        city.textContent = `${addressList.city}, ${addressList.state} ${addressList.zip}`;
        membership.textContent = `Membership Level: ${element.membershipLevel}`;
        logo.setAttribute('src', element.image);
        logo.setAttribute('alt', element.name);
        logo.setAttribute('loading', 'lazy');

        address.appendChild(street);
        address.appendChild(city);
        address.appendChild(phone);
        address.appendChild(website);
        address.appendChild(membership);
        newMember.appendChild(companyName);
        newMember.appendChild(logo);
        newMember.appendChild(address);
        gridContent.appendChild(newMember);
    });
}

function DisplayAsList(data) {
    data.members.forEach((element) => {
        const member = document.createElement('section');
        const companyName = document.createElement('h2');
        const street = document.createElement('p');
        const city = document.createElement('p');
        const phone = document.createElement('p');
        const website = document.createElement('p');
        const membership = document.createElement('p');
        const addressList = element.address[0];

        website.textContent = element.website;
        phone.textContent = `Phone Number: ${element.phoneNum}`
        companyName.textContent = element.name;
        street.textContent = addressList.street;
        city.textContent = `${addressList.city}, ${addressList.state} ${addressList.zip}`;
        membership.textContent = `Membership: ${element.membershipLevel}`;

        member.appendChild(companyName);
        member.appendChild(street);
        member.appendChild(city);
        member.appendChild(phone);
        member.appendChild(website);
        member.appendChild(membership);
        gridContent.appendChild(member);
    });
};


toggleSwitch.addEventListener("click", () => {
    gridContent.classList.toggle("grid-mode");
    gridContent.classList.toggle("list-mode");
    gridContent.innerHTML = null;
    if (gridContent.classList.value == "list-mode") {
        toggleSwitch.textContent = "Switch To Grid View";
        getDirectory(DisplayAsList);
    } else {
        toggleSwitch.textContent = "Switch To List View";
        getDirectory(DisplayAsGrid);
    };
});