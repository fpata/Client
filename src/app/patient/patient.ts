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
}
export class PatientSearch {
	constructor(){}
	Id:Number;
	FirstName:string; 
	LastName :string; 
	PrimaryPhone:string;
	PrimaryEmail:string;
	City:String;
}
