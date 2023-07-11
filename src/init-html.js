const initHtml = () => {
    const content = document.getElementById('content');

    const header = document.createElement('div');
    header.classList.add("header");
    content.appendChild(header)
    
    const home = document.createElement('button');
    home.textContent = "Home";
    home.id = "home";
    header.appendChild(home);
    const menu = document.createElement('button');
    menu.textContent = "Menu";
    menu.id = "menu";
    header.appendChild(menu);
    const contact = document.createElement('button');
    contact.textContent = "Contact";
    contact.id = "contact";
    header.appendChild(contact);

    const main = document.createElement('div');
    main.classList.add('bgimage');
    main.id = "main";
    content.appendChild(main);
}

export { initHtml };
