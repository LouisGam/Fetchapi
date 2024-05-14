function getUserData() {
    fetch(`https://randomuser.me/api/`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        displayUser(data.results[0]);

    })
    .catch(console.error)
}

getUserData();
// displays user object on the Dom
function displayUser(userData) {
    const picture = userData.picture.large;
    const name = userData.name.first + " " + userData.name.last;
    const city = userData.location.city;
    const country = userData.location.country;
    const email = userData.email;

    //Dom maipulation Steps
    //create
    const avatarImg = document.createElement("img");
    const namePara = document.createElement("p");
    const cityPara = document.createElement("p");
    const countryPara = document.createElement("p");
    const emailPara = document.createElement("p");
    //modify
    avatarImg.src = picture;
    avatarImg.alt = name;
    namePara.textContent = name;
    countryPara.textContent = country;
    cityPara.textContent = city;
    emailPara.textContent = email;

    // append all elements
    document.body.append(avatarImg, namePara, cityPara, countryPara, emailPara);
}