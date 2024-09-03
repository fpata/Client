export class Patient {
	
	constructor(){

	}
    ID:number;  
	FirstName:string; 
	LastName :string; 
    MiddleName :string; 
	Age:number; 
	Gender :number; 
	Role: string;
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
PatientTreatmentDetails: PatientTreatmentDetail[];

}


export class PatientReport  {
	constructor(){}
	ID:	 			number;
	PatientID:	 	number;
	ReportDate:	 	string;
	ReportName:		string;
	ReportFinding:	string;
	DoctorName:	 	string;
}

export class PatientTreatment {
	constructor(){}
	ID:	 			number;
	PatientID:	 	number;
	ChiefComplaint:	string;
	Observation:	string;
	TreatmentPlan: 	string;

}

export class PatientTreatmentDetail {
	constructor(){}
	ID:	 			number;
	PatientID:	 	number;
	PatientTreatmentID:	 	number;
	Tooth:	string;
	Procedure:	string;
	Advice: 	string;
	TreatmentDate: string;
}

export class PatientAppointment {
	constructor(){}
	ID:	 			number;
	PatientID:	 	number;
	ApptDate:	 		string;
	ApptTime:			string;
	PatientName:	string;
	DoctorName:		string;
	DoctorId:		number;
	TreatmentName:	string;
}

export class PatientSearch {
	constructor(){}
	ID:Number;
	FirstName:string; 
	LastName :string; 
	PrimaryPhone:string;
	PrimaryEmail:string;
	PermCity:String;
}

export class PatientViewModel {
Patient: Patient;
PatientReports:PatientReport[];
PatientTreatments:PatientTreatment[];
PatientAppointments:PatientAppointment[];
PatientTreatmentDetails: PatientTreatmentDetail[];
}
