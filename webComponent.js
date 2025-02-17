import { pagesContent } from "/webcomponent-multipage/pagesContent.js";

class PageContent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        const template = document.querySelector("#content-template");
        this.shadowRoot.innerHTML = `
            <style>
                div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                p {
                    font-family: Arial, Helvetica, sans-serif;
                    color: #FAF9F6;
                    margin-top: 2rem;
                    margin-left: 3rem;
                    margin-right: 3rem;
                    text-align: center;
                    line-height: 1.5;

                }

                h3 {
                    color: #FAF9F6;
                    text-decoration: underline;
                    margin-top: 2rem;
                }
                
                img {
                    border-style: solid;
                    border-width: 1.5rem;
                    border-color: #cc9a9b;
                    border-radius: 5px;
                    margin-top: 1rem;
                }
            </style>
        
            <div>
                <h3></h3>
                <img>
                <p></p>
            </div>`;
    }

    connectedCallback() {

        const customElementArray = pagesContent.filter(object => object.id === this.id);
        const heading = this.shadowRoot.querySelector('h3');
        const pageParagraph = this.shadowRoot.querySelector('p');
        const pageImg = this.shadowRoot.querySelector('img');
        pageImg.src = customElementArray[0].src;
        pageParagraph.textContent = customElementArray[0].content;
        heading.textContent = customElementArray[0].heading;
    }
}

customElements.define('ap-testcomponent', PageContent); 