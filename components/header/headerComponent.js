class HeaderComponent extends HTMLElement {
    constructor() {
        super();
             
       fetch('./components/header/header.html')
        .then((response) => {
          return response.text();
        })
        .then((html) => {
          this.innerHTML = html
        }); 
     
      }

      connectedCallback() {
      }
}

window.customElements.define('header-component', HeaderComponent);