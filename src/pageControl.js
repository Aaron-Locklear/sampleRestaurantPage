export const pageControl = (function(){
  function loadBase(){
    const contentBody = document.createElement("div");
    const content = document.querySelector("#content");
    const header = document.createElement("div");
    const home = document.createElement("div");
    const menu = document.createElement("div");
    const contact = document.createElement("div");

    header.setAttribute("id","header");
    home.setAttribute("id","home");
    menu.setAttribute("id","menu");
    contact.setAttribute("id","contact");
    contentBody.setAttribute("id", "body");

    home.innerText = "Home";
    menu.innerHTML = "Menu";
    contact.innerHTML = "Contact";

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);

    content.appendChild(header);
    content.appendChild(contentBody);

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
      headerElement.style.userSelect = "none";
    })

    home.addEventListener("click", ()=>{
      loadHome();
    })
  }

  function loadHome(){
    const content = document.querySelector("#content");
    const contentBody = document.createElement("div");
    const title = document.createElement("h1");
    const description = document.createElement("p");
    const hours = document.createElement("p");
    const address = document.createElement("p");
    const homeButton = document.querySelector("#home");

    content.removeChild(document.querySelector("#body"));

    content.appendChild(contentBody);
    contentBody.appendChild(title);
    contentBody.appendChild(description);
    contentBody.appendChild(hours);
    contentBody.appendChild(address);

    contentBody.setAttribute("id","body");

    title.innerHTML = "Pixel Palate";
    description.innerHTML = "Welcome to Pixel Palate, where gastronomy meets artistry in the most delicate fusion. At Pixel Palate, we believe that simplicity is the ultimate form of sophistication. Our culinary canvas is designed to capture the essence of each ingredient, presenting dishes as elegant masterpieces on a plate. Our chefs meticulously craft a symphony of flavors, carefully selecting the finest organic ingredients to compose dishes that are not only a treat for the palate but also a feast for the eyes. The minimalist décor echoes our culinary philosophy, creating a tranquil atmosphere that allows you to focus solely on the marriage of flavors that dance across your taste buds. Step into a world where every bite is a brushstroke on your journey of taste and visual delight. Pixel Palate invites you to experience the harmony of simplicity and complexity, where every dish is a work of art.";
    hours.innerHTML = "Monday - Friday: 11:30 AM - 9:00 PM <br>Saturday: 12:00 PM - 10:00 PM <br>Sunday: Closed";
    address.innerHTML = "Pixel Palate 123 Serenity Street Minimont City, NM 54321";

    document.querySelector("#home").style.borderBottom = "solid red 2px";
    document.querySelector("#menu").style.border = "none";
    document.querySelector("#contact").style.border = "none";
  }

  return {
    loadBase,
    loadHome,
  }
})();