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
    reply.style.height = "300px";
    reply.style.backgroundColor = "black";
    reply.textContent = `Hey ${userName} thank you for filling the form. I'll contact you ASAP`;
    section.append(reply);
})