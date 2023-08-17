export const pageControl = (function(){
  function loadBase(){
    const content = document.querySelector("#content");
    const header = document.createElement("div");
    const home = document.createElement("div");
    const menu = document.createElement("div");
    const contact = document.createElement("div");

    header.setAttribute("id","header");
    home.setAttribute("id","home");
    menu.setAttribute("id","menu");
    contact.setAttribute("id","contact");

    home.innerText = "Home";
    menu.innerHTML = "Menu";
    contact.innerHTML = "Contact";

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);

    content.appendChild(header);
  }

  return {
    loadBase,
  }
})();