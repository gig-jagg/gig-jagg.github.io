<<<<<<< HEAD
const boxData = [
        
    { title: "LinkedIn",
    link:"https://www.linkedin.com/in/gregory-jaggernauth/",
    image:"assets/linkedin.png"},

    { title: "GitHub", 
    link:"https://github.com/jaggernauthg",
    image:"assets/github.png"},
    ];

const container = document.getElementById("profile-container"); 

boxData.forEach(item => {
    const profileBox = document.createElement("div"); 
    profileBox.classList.add("profile-box");

    profileBox.innerHTML = `
        <img src=${item.image} alt=${item.title} width="20" height="20">
        <a class="links" href=${item.link} target="_blank" rel="noopener noreferrer">${item.title}</a>`

        container.appendChild(profileBox); 
    });
=======
const boxData = [
        
    { title: "LinkedIn",
    link:"https://www.linkedin.com/in/gregory-jaggernauth/",
    image:"assets/linkedin.png"},

    { title: "GitHub", 
    link:"https://github.com/gig-jagg",
    image:"assets/github.png"},
    ];

const container = document.getElementById("profile-container"); 

boxData.forEach(item => {
    const profileBox = document.createElement("div"); 
    profileBox.classList.add("profile-box");

    profileBox.innerHTML = `
        <img src=${item.image} alt=${item.title} width="20" height="20">
        <a class="links" href=${item.link} target="_blank" rel="noopener noreferrer">${item.title}</a>`

        container.appendChild(profileBox); 
    });
>>>>>>> 7a50195c8f5003e1eb5f01ddf94f324fead87794
