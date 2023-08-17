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

    menu.addEventListener("click", ()=>{
      loadMenu();
    })

    contact.addEventListener("click", ()=>{
      loadContact();
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

  function loadMenu(){
    document.querySelector("#home").style.border = "none";
    document.querySelector("#menu").style.borderBottom = "solid red 2px";
    document.querySelector("#contact").style.border = "none";

    content.removeChild(document.querySelector("#body"));

    const contentBody = document.createElement("div");
    contentBody.setAttribute("id","body");
    document.querySelector("#content").appendChild(contentBody);

    const appetizer = document.createElement("ul");
    appetizer.style.listStyleType = "none";
    ["Appetizers:","Monochrome Mango Salad: $9.99","Zen Garden Sushi Roll: $12.50","Pixelated Pasta Bites: $8.75"].forEach((item) =>{
      const listItem = document.createElement("li");
      listItem.innerHTML = item;
      appetizer.appendChild(listItem);
    })
    contentBody.appendChild(appetizer);

    const mainCourse = document.createElement("ul");
    mainCourse.style.listStyleType = "none";
    ["Main Courses:","Essence of Earth Bowl: $14.50","Tranquil Tofu Tacos: $11.25","Symphony of Simple Soups: $7.99"].forEach((item) =>{
      const listItem = document.createElement("li");
      listItem.innerHTML = item;
      mainCourse.appendChild(listItem);
    })
    contentBody.appendChild(mainCourse);

    const desserts = document.createElement("ul");
    desserts.style.listStyleType = "none";
    ["Desserts:","Mindful Matcha Parfait: $6.99","Minimalist Macarons (Set of 3): $8.50","Wholesome Walnut Brownie: $5.25"].forEach((item) =>{
      const listItem = document.createElement("li");
      listItem.innerHTML = item;
      desserts.appendChild(listItem);
    })
    contentBody.appendChild(desserts);
  }

  function loadContact(){
    document.querySelector("#home").style.border = "none";
    document.querySelector("#menu").style.border = "none";
    document.querySelector("#contact").style.borderBottom = "solid red 2px";

    content.removeChild(document.querySelector("#body"));

    const contentBody = document.createElement("div");
    contentBody.setAttribute("id","body");
    document.querySelector("#content").appendChild(contentBody);

    const address = document.createElement("p");
    address.innerHTML = "Address : 123 Serenity Street, Minimont City, NM 54321";

    const phone = document.createElement("p");
    phone.innerHTML = "Phone : (555) 123-4567";

    const email = document.createElement("p");
    email.innerHTML = "Email : info@pixelpalate.com";

    const social = document.createElement("p");
    social.innerHTML = "Instagram : @PixelPalate";

    contentBody.appendChild(address);
    contentBody.appendChild(address);
    contentBody.appendChild(phone);
    contentBody.appendChild(email);
    contentBody.appendChild(social);
  }

  return {
    loadBase,
    loadHome,
  }
})();