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

    //styling elements
    header.style.display = "flex";
    header.style.justifyContent = "center";
    header.style.alignItems = "center";
    header.style.height = "50px";
    header.style.width = "100%";

    [home, menu, contact].forEach((headerElement) => {
      headerElement.style.paddingLeft = "10px";
      headerElement.style.paddingRight = "10px";
      headerElement.style.cursor = "pointer";
    })
  }

  return {
    loadBase,
  }
})();