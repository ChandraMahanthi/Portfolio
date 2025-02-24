let Name = document.getElementById("name");
let Contact = document.getElementById("phoneNumber");
let form = document.querySelector("form");
let section = document.getElementById("contact-section");
let formBackground = document.getElementById("formBackground");


form.addEventListener("submit",()=>
{
    event.preventDefault();
    console.log("Success");
    let userName = Name.value;
    let userContact = Contact.value;
    
    let userData = {
        userName:userName,
        userContact:userContact
    };
    console.log(userData);
    formBackground.style.display = "none";
    let reply = document.createElement("div");
    // Styling for the reply box
    reply.style.width = "500px";
    reply.style.height = "200px";
    reply.style.backgroundColor = "black";
    reply.style.color = "gray";
    reply.style.fontSize = "40px";
    reply.style.textAlign = "center";
    reply.innerHTML = `Hey <strong style="color:white">${userName}</strong> thank you for filling the form. I'll contact you ASAP`;
    section.append(reply);

    let button = document.createElement("button");
    button.innerHTML = `Create a new form`;
    button.style.width = "200px";
    button.style.height = "50px";
    button.style.fontSize = "15px";
    button.style.display = "block"
    
    reply.append(button);

    button.addEventListener("click",()=>
    {
        formBackground.style.display = "block"; 
        formBackground.style.padding = "70px"; 
        reply.style.display = "none" ; 
    })
})