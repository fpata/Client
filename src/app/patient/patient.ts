export class Patient {
	
	constructor(){

	}
    Id:number;  
	FirstName:string; 
	LastName :string; 
    MiddleName :string; 
	Age:number; 
	Gender :number; 
	UserName:string;
	Password :string;
	PermAddress1:string;
	PermAddress2:string; 
	PermCity:string;
	PermState :string;
	PermCountry :string;
	PermPostalCode:string;
	CorrAddress1:string;
	CorrAddress2:string;
	CorrCity :string;
	CorrState :string;
	CorrCountry:string;
	CorrPostalCode:string;
	PrimaryPhone:string;
	PrimaryEmail:string;
	SecondaryPhone:string;
    SecondaryEmail:string; 
    EmergencyContactName:string; 
	EmergencyContactEmail:string; 
	EmergencyContactPhone:string; 
	EmergencyContactRelation :string; 
	ExistingDieases:string;
	Medications:string;
	Allergies:string;
	FatherMedicalHistory:string;
	MotherMedicalHistory:string;
	PatientReports:PatientReport[];
	PatientTreatments:PatientTreatment[];
	PatientAppointments:PatientAppointment[];
}


export class PatientReport  {
	constructor(){}
	Id:	 			number;
	PatientId:	 	number;
	ReportDate:	 	number;
	ReportName:		string;
	ReportFinding:	string;
	DoctorName:	 	string;
}

export class PatientTreatment {
	constructor(){}
	Id:	 			number;
	PatientId:	 	number;
	ChiefComplaint:	string;
	Observation:	string;
	TreatmentPlan: 	string;
	PatientTreatmentDetails: PatientTreatmentDetail[];
}

export class PatientTreatmentDetail {
	constructor(){}
	Id:	 			number;
	PatientId:	 	number;
	PatientTreatmentId:	 	number;
	Tooth:	string;
	Procedure:	string;
	Advice: 	string;
	TreatmentDate: string;
}

export class PatientAppointment {
	constructor(){}
	Id:	 			number;
	PatientId:	 	number;
	Date:	 	string;
	Time:		string;
	NextDate:	string;
	NextTime: 	string;
}

export class PatientSearch {
	constructor(){}
	Id:Number;
	FirstName:string; 
	LastName :string; 
	PrimaryPhone:string;
	PrimaryEmail:string;
	PermCity:String;
}
