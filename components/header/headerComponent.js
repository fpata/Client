class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.render()
    console.log('Header component initaited');
  }

  connectedCallback() {
    console.log("connected callabck called");

  }
  render() {
    fetch('./components/header/header.html')
      .then((response) => {
        return response.text();

      })
      .then((html) => {
        this.innerHTML = html;
        document.getElementById('btnGlobalSearch').addEventListener('click', this.btnClicked);
        document.getElementById('navDashBoard').addEventListener('click', this.NaviagteTo);
        document.getElementById('navAddPatient').addEventListener('click', this.NaviagteTo);
        document.getElementById('navSearchPatient').addEventListener('click', this.NaviagteTo);
        document.getElementById('navAppointment').addEventListener('click', this.NaviagteTo);
        document.getElementById('navReports').addEventListener('click', this.NaviagteTo);
        document.getElementById('navBilling').addEventListener('click', this.NaviagteTo);
      })
  }

  btnClicked() {
    console.log("button clicked");
  }

  NaviagteTo() {
    console.log(this.attributes.id);
    switch (this.attributes.id.value) {
      case 'navDashBoard':
        console.log('dashBoard clicked');
      break;
      case 'navAddPatient':
        console.log('navAddPatient clicked');
      break;
      case 'navSearchPatient':
        console.log('navSearchPatient clicked');
      break;
      case 'navAppointment':
        console.log('navAppointment clicked');
      break;
      case 'navReports':
        console.log('navReports clicked');
      break;
      case 'navBilling':
        console.log('navBilling clicked');
      break;
    }

  }
}


window.customElements.define('header-component', HeaderComponent);

