class PatientAppointmentComponent extends HTMLElement {
    constructor() {
        super();
             
       fetch('./components/patient/patientAppointment.html')
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

window.customElements.define('patientappointment-component', PatientAppointmentComponent);