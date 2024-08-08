let Name = document.getElementById("name");
let Contact = document.getElementById("phoneNumber");
let form = document.querySelector("form")

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

})