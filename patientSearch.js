class PatientSearchComponent extends HTMLElement {
    constructor() {
        super();
             
       fetch('./components/patient/patientSearch.html')
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

window.customElements.define('patientsearch-component', PatientSearchComponent);