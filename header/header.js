function cargarHeader() {

    let header = document.createElement('div');
    header.className = "header";

    let logo = document.createElement('img');
    logo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvj_PXyw6rATuzk5JBGJjTNyHvPv_FZ6nLxQ&s";
    logo.alt = "Raspberry";
    logo.className = "logo";
    header.appendChild(logo);

    let title = document.createElement('div');
    title.className = "titulo";
    title.textContent = "Raspery py pico";
    header.appendChild(title);


    return header;

}


export { cargarHeader }