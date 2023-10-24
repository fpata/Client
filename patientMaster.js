class PatientMasterComponent extends HTMLElement {
    constructor() {
        super();
             
       fetch('./components/patient/patientMaster.html')
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

window.customElements.define('patientmaster-component', PatientMasterComponent);