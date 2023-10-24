class FooterComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML =`
        <nav class="navbar fixed-bottom navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fixed bottom</a>
  </div>
</nav>`       
      }

      connectedCallback() {
      }
}
window.customElements.define('footer-component', FooterComponent);