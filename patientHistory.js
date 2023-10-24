class PatientHistoryComponent extends HTMLElement {
    constructor() {
        super();
             
       fetch('./components/patient/patientHistory.html')
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

window.customElements.define('patienthistory-component', PatientHistoryComponent);