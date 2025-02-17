const baseURL = "https://aa-coding.github.io/webcomponent-multipage/"; 

window.addEventListener("hashchange", (e) =>{
    
        const id = window.location.hash.substring(1);
        makeNewPage(id);
}
) ;  

const makeNewPage = (id) => {

    let child = content.firstElementChild;
    while (child) {
        content.removeChild(child);
        child = content.firstElementChild;
    };

    if (id === "home") {
        const template = document.querySelector("#home-content");
        const content = document.querySelector("#content");
        content.appendChild(template.content.cloneNode(true));
    }
    
    else {
    const myCustomElement = document.createElement('ap-testcomponent');
    myCustomElement.id = id;
    content.appendChild(myCustomElement);
    }

    window.location = (`${baseURL}#${id}`); 
};

makeNewPage("home");

const navLinks = Array.from(document.querySelectorAll(".nav-link"));
navLinks.map ( (navLink) => 
    
    navLink.addEventListener("click", function(e) {

        makeNewPage(e.target.id);
    })
); 