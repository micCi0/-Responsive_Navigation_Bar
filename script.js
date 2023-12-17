// declaration
const menu = document.querySelector("ul");
const icon = document.querySelector(".menu i");

icon.addEventListener("click" , () =>{
    menu.classList.toggle("show"); // it will show class list or remove
    (menu.classList.contains("show")) ? 
    icon.classList = "ri-close-line" : icon.classList = "ri-menu-line"; // change a  icon
})