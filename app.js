const nameP = document.querySelector("#nameInp");
const phoneP = document.querySelector("#teleNumber");
const countryP = document.querySelector("#country");
const aside = document.querySelector("aside");
const hide = document.querySelector(".clean")


const sub = document.querySelector("button");

let personContainer = JSON.parse(localStorage.getItem("person")) ? JSON.parse(localStorage.getItem("person")) : [] ;

if(localStorage.length <1){
    aside.style.display = "none";
    hide.style.display = "none";
}
const addPerson = () =>{
    for(let i =0; i<personContainer.length; i++){
        const container = document.createElement("div");
        const title = document.createElement("h3");
        const pName = document.createElement("p");
        const pPhone = document.createElement("p");
        const pCountry = document.createElement("p");
        const deleteperson = document.createElement("output");
        deleteperson.innerHTML = `❌`
        container.append(title, pName, pPhone, pCountry , deleteperson);
        aside.appendChild(container);
        container.style.position = "relative"

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
const deleteP = document.querySelectorAll("aside output");

for(let i=0; i<deleteP.length; i++){
    deleteP[i].addEventListener("click" , () =>{
        let newarr = [];
        for(let j=0; j<personContainer.length; j++){
            if(j != i){
                newarr.push(personContainer[j])
            }
        }
        personContainer = []
        localStorage.clear()
        personContainer = [...newarr]
        if(personContainer.length >= 1){
            localStorage.setItem("person", JSON.stringify(personContainer));
        }
        location.reload()
    })
}
hide.addEventListener("click" , () =>{
    personContainer = [];
    localStorage.clear();
    location.reload()
})
