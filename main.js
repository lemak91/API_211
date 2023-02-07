let arrayOfPersons;

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function () {
  getPersons();
};

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPersons = () => {
  fetch("https://randomuser.me/api/?results=20")
    .then((res) => res.json())
    .then((persons) => (arrayOfPersons = persons.results));
};

// This function logs the results in your browser's console
const consolePersons = () => {
  console.log(arrayOfPersons);
};

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPersons = () => {
  const allPersons = document.getElementById("all-persons");
  arrayOfPersons.map((persons) => {
    const li = document.createElement("li");
    const image = document.createElement("img");
    image.src = persons.picture.large
    const text = document.createTextNode(`${persons.name.first} ${persons.name.last}`);
    li.appendChild(text);
    li.appendChild(image);
    allPersons.append(li);

    const button = document.createElement("button");
    button.innerHTML = "More Info"
    button.className = "more-info-button";
    button.onclick = () => {
        const infoDiv = document.createElement("div");
        infoDiv.className = "info-container"
        const infoText = document.createTextNode(`DOB: ${persons.dob.date} Street Name: ${persons.location.street.name} City: ${persons.location.city} State: ${persons.location.state} Phone Number: ${persons.phone}`)
        infoDiv.appendChild(infoText);
        li.appendChild(infoDiv);
    }
    li.appendChild(button);
  });
};

/* 
Your job now is to follow the functions above and use them as templates 
 to build the functionality the buttons in the index.html file already 
 have laid out in it. This way you can learn how to build fetch requests 
 and work with other APIs and become a real developer!! 
*/
