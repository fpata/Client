class PatientPersonalInfoComponent extends HTMLElement {
    constructor() {
        super();
             
       fetch('./components/patient/patientPersonalInfo.html')
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

window.customElements.define('patientpersonalinfo-component', PatientPersonalInfoComponent);