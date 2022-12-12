const Subscriber = class {
    constructor(id,fullName, gender, BD_year) {
      this.id= id;
      this.fullName = fullName;
      this.gender = gender;
      this.BD_year=BD_year;
    }
  
    age() {
      return new Date().getFullYear()-this.since;
    }
  };
  