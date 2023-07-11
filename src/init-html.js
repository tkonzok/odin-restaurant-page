const initHtml = () => {
    const content = document.getElementById('content');

    const header = document.createElement('div');
    header.classList.add("header");
    content.appendChild(header)
    
    const home = document.createElement('p');
    home.textContent = "Home";
    header.appendChild(home);
    const menu = document.createElement('p');
    menu.textContent = "Menu";
    header.appendChild(menu);
    const contact = document.createElement('p');
    contact.textContent = "Contact";
    header.appendChild(contact);

    const main = document.createElement('div');
    main.classList.add('bgimage');
    content.appendChild(main);
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image');
    main.appendChild(imageDiv);
    const image = document.createElement('img');
    image.setAttribute("src", "../src/restaurant.jpg");
    image.setAttribute("alt", "Restaurant Background Image");
    imageDiv.appendChild(image);
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    main.appendChild(cardDiv);
    const headline = document.createElement('h1');
    headline.textContent = "Welcome to my Restaurant";
    cardDiv.appendChild(headline);
    const para = document.createElement('p');
    para.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
    cardDiv.appendChild(para);
}

export {initHtml};
