const nameP = document.querySelector("#nameInp");
const phoneP = document.querySelector("#teleNumber");
const countryP = document.querySelector("#country");
const aside = document.querySelector("aside")

const sub = document.querySelector("button");

let personContainer = JSON.parse(localStorage.getItem("person")) ? JSON.parse(localStorage.getItem("person")) : [] ;

if(localStorage.length <1){
    aside.style.display = "none"
}
const addPerson = () =>{
    for(let i =0; i<personContainer.length; i++){
        const container = document.createElement("div");
        const title = document.createElement("h3");
        const pName = document.createElement("p");
        const pPhone = document.createElement("p");
        const pCountry = document.createElement("p");
        container.append(title, pName, pPhone, pCountry);
        aside.appendChild(container);

        title.innerHTML = `Persone number: ${i+1}`;
        pName.innerHTML = personContainer[i].name;
        pPhone.innerHTML = personContainer[i].phone;
        pCountry.innerHTML = personContainer[i].country;
    }
}
addPerson();

sub.addEventListener("click" ,(e) =>{
    e.preventDefault();
    personContainer.push({
        name : nameP.value,
        phone: phoneP.value,
        country: countryP.value
    });
    localStorage.setItem("person", JSON.stringify(personContainer));
    location.reload()
    
})