// main class 
class Fb{
    //constructor of Fb class
    constructor(public ProfileName:string,public showGender:string,public showLanguages:string,public showDOB:string,public showInterestedIn:string,
    protected showContactInfo:number,public showRelationship:string,public City:string,public FamilyMember:any,public Films:any){
        this.ProfileName=ProfileName;
        this.showGender=showGender;
        this.showLanguages=showLanguages;
        this.showDOB=showDOB;
        this.showInterestedIn=showInterestedIn;
        this.showContactInfo=showContactInfo;
        this.showRelationship=showRelationship;
        this.City=City;
        this.FamilyMember=FamilyMember;
        this.Films=Films;

    }
    //methods
    showname=()=>{
        console.log("Name=",this.ProfileName);
    }
    showgender=()=>{
        console.log("Gender=",this.showGender);
    }
    showlanguage=()=>{
        console.log("Language=",this.showLanguages);
    }
    showbirthday=()=>{
        console.log("DOB=",this.showDOB);
    }
    showinterst=()=>{
        console.log("Interested In=",this.showInterestedIn);
    }
    getContact=()=>{
        console.log("Contact=",this.showContactInfo);
    }
   showrelation=()=>{
        console.log("Relationship=",this.showRelationship);
    }
showCity=()=>{
    console.log("Home Town=",this.City);
}
setCity=(name:string)=>{
    console.log("Current City=",this.City=name);
}
family=()=>{
    console.log("Family Member=",this.FamilyMember);
}
setfamily=(...fam:string[])=>{
    console.log("Added Members=",this.FamilyMember=fam)
}
showFilms=()=>{
    console.log("Films=",this.Films);
}
showLikes=()=>{
console.log("show likes");
}
AppsAndGames=()=>{
console.log("show Apps And games");
}
}
class Education{
    constructor(public schoolname:string,public collegeName:string){
        this.schoolname=schoolname;
        this.collegeName=collegeName;

    }
showschool=()=>{
    console.log("Secondary School=",this.schoolname);
}
showCollege=()=>{
    console.log("College=",this.collegeName);
}
}
class Work{
    constructor(public work:string){
        this.work=work;

    }
    showwork=()=>{
        console.log("Work Experience=",this.work);
    }
}
//objects
let fac=new Fb("Shivansh Arora","Male","Hindi and English","26-june-1992","women",7017483927,"Single","Saharanpur","Tushar Arora","Bahubali,Kapoor and Sons,Avengers");
let School=new Education("Rainbow School","LPU");
let ex=new Work("Front-End-Developer");

console.log("\nBASIC INFO");
fac.showname();
fac.showgender();
fac.showlanguage();
fac.showbirthday();
fac.showinterst();
fac.getContact();
console.log("\nRelationship");
fac.showrelation();
console.log("\nPlace You've Lived");
fac.showCity();
fac.setCity("Delhi");
console.log("\nFamily Members");
fac.family();
fac.setfamily("Aradhik kapoor","Himani Kapoor","Nidhi Arora");
console.log("\nFILMS");
fac.showFilms();
console.log("\nLIKES");
fac.showLikes();
console.log("\nAPPS AND GAMES");
fac.AppsAndGames();

console.log("\nEDUCATION");
School.showschool();
School.showCollege();

console.log("\nWORK EXPERIENCE");
ex.showwork();
