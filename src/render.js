const home = () => {
    const main = document.getElementById('main');
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }
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

const menu = () => {
    const main = document.getElementById('main');
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image');
    main.appendChild(imageDiv);
    const image = document.createElement('img');
    image.setAttribute("src", "../src/menu.jpg");
    image.setAttribute("alt", "Menu Image");
    imageDiv.appendChild(image);
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    main.appendChild(cardDiv);
    const headline = document.createElement('h1');
    headline.textContent = "Menu";
    cardDiv.appendChild(headline);
    const para = document.createElement('p');
    para.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
    cardDiv.appendChild(para);
}

const contact = () => {
    const main = document.getElementById('main');
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image');
    main.appendChild(imageDiv);
    const image = document.createElement('img');
    image.setAttribute("src", "../src/contact.jpg");
    image.setAttribute("alt", "Contact Image");
    imageDiv.appendChild(image);
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    main.appendChild(cardDiv);
    const headline = document.createElement('h1');
    headline.textContent = "Contact Us";
    cardDiv.appendChild(headline);
    const para = document.createElement('p');
    para.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
    cardDiv.appendChild(para);
}

export { home, menu, contact };