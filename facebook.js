// main class 
var Fb = /** @class */ (function () {
    //constructor of Fb class
    function Fb(ProfileName, showGender, showLanguages, showDOB, showInterestedIn, showContactInfo, showRelationship, City, FamilyMember, Films) {
        var _this = this;
        this.ProfileName = ProfileName;
        this.showGender = showGender;
        this.showLanguages = showLanguages;
        this.showDOB = showDOB;
        this.showInterestedIn = showInterestedIn;
        this.showContactInfo = showContactInfo;
        this.showRelationship = showRelationship;
        this.City = City;
        this.FamilyMember = FamilyMember;
        this.Films = Films;
        //methods
        this.showname = function () {
            console.log("Name=", _this.ProfileName);
        };
        this.showgender = function () {
            console.log("Gender=", _this.showGender);
        };
        this.showlanguage = function () {
            console.log("Language=", _this.showLanguages);
        };
        this.showbirthday = function () {
            console.log("DOB=", _this.showDOB);
        };
        this.showinterst = function () {
            console.log("Interested In=", _this.showInterestedIn);
        };
        this.getContact = function () {
            console.log("Contact=", _this.showContactInfo);
        };
        this.showrelation = function () {
            console.log("Relationship=", _this.showRelationship);
        };
        this.showCity = function () {
            console.log("Home Town=", _this.City);
        };
        this.setCity = function (name) {
            console.log("Current City=", _this.City = name);
        };
        this.family = function () {
            console.log("Family Member=", _this.FamilyMember);
        };
        this.setfamily = function () {
            var fam = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                fam[_i] = arguments[_i];
            }
            console.log("Added Members=", _this.FamilyMember = fam);
        };
        this.showFilms = function () {
            console.log("Films=", _this.Films);
        };
        this.showLikes = function () {
            console.log("show likes");
        };
        this.AppsAndGames = function () {
            console.log("show Apps And games");
        };
        this.ProfileName = ProfileName;
        this.showGender = showGender;
        this.showLanguages = showLanguages;
        this.showDOB = showDOB;
        this.showInterestedIn = showInterestedIn;
        this.showContactInfo = showContactInfo;
        this.showRelationship = showRelationship;
        this.City = City;
        this.FamilyMember = FamilyMember;
        this.Films = Films;
    }
    return Fb;
}());
var Education = /** @class */ (function () {
    function Education(schoolname, collegeName) {
        var _this = this;
        this.schoolname = schoolname;
        this.collegeName = collegeName;
        this.showschool = function () {
            console.log("Secondary School=", _this.schoolname);
        };
        this.showCollege = function () {
            console.log("College=", _this.collegeName);
        };
        this.schoolname = schoolname;
        this.collegeName = collegeName;
    }
    return Education;
}());
var Work = /** @class */ (function () {
    function Work(work) {
        var _this = this;
        this.work = work;
        this.showwork = function () {
            console.log("Work Experience=", _this.work);
        };
        this.work = work;
    }
    return Work;
}());
//objects
var fac = new Fb("Shivansh Arora", "Male", "Hindi and English", "26-june-1992", "women", 7017483927, "Single", "Saharanpur", "Tushar Arora", "Bahubali,Kapoor and Sons,Avengers");
var School = new Education("Rainbow School", "LPU");
var ex = new Work("Front-End-Developer");
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
fac.setfamily("Aradhik kapoor", "Himani Kapoor", "Nidhi Arora");
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
