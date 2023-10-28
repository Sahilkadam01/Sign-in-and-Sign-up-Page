const main= document.getElementById("main");
const registerbtn= document.getElementById("register");
const loginbtn =document.getElementById('sign-in');

registerbtn.addEventListener('click' , ()=>
{
    main.classList.add("active");
});

loginbtn.addEventListener('click' , ()=>
{
    main.classList.remove("active");
});

