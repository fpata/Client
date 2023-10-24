class PatientReportComponent extends HTMLElement {
    constructor() {
        super();
             
       fetch('./components/patient/patientReport.html')
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

window.customElements.define('patientreport-component', PatientReportComponent);