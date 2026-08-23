let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", (dets) => { 
    dets.preventDefault();
    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);
    let isValid = true;
    if(!emailans){
        document.querySelector("#emailError").textContent = "Please enter a valid email address.";
        document.querySelector("#emailError").style.display = "initial";
        isValid = false;
    }
    if(!passwordans){
       document.querySelector("#passwordError").textContent = "Please enter a valid password."; 
       document.querySelector("#passwordError").style.display = "initial";
       isValid = false;
    }

    if(isValid){
        alert("Form submitted successfully!");
    }

}); 