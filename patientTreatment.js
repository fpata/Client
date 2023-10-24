class PatientTreatmentComponent extends HTMLElement {
    constructor() {
        super();
             
       fetch('./components/patient/patientTreatment.html')
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

window.customElements.define('patienttreatment-component', PatientTreatmentComponent);