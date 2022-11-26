class Profile {
  constructor({ firstName, lastName, email, venmoHandle }) {
    this.firstName = firstName;
    this.lastname = lastName;
    this.email = email;
    this.venmoHandle = venmoHandle;
    this.tasksCompleted = [];
    this.tasksPurchased = [];
  }

  updateName(firstName, lastName) {
    this.firstName = firstName;
    this.lastname = lastName;
  }

  setAge(age) {
    this.age = age;
  }

  setPhoneNumber(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  getProfileType() {
    return "Customer";
  }
}

// once seller behavior activated, pass parameters of regular profile
// into the seller profile
class SellerProfile {
  constructor(firstName, lastName, email, venmoHandle) {
    super(firstName, lastName, email, venmoHandle);
    // transcript must be passed as the html page returned
    // when students open the unofficial transcript page on
    // my ucla
    this.transcript = null;
    this.tutor = false;
    this.classesTutoring = []; // list of classes student elects to tutor from pre made list
    this.swipeSeller = false;
    this.carpooler = false;
  }

  setTranscript(transcript) {
    this.transcript = transcript;
  }

  parseTranscript(transcript, gradeCutoff) {
    // parse transcript using j-pdfjson to identify classes seller has
    // taken, and the grades the received
  }

  toggleTutor() {
    this.tutor = !this.tutor;
  }

  toggleSwiper() {
    this.swipeSeller = !this.swipeSeller;
  }

  toggleCarpooler() {
    this.carpooler = !this.carpooler;
  }

  setClassToTutor(c) {
    if (!this.classesTutoring.includes(c)) {
      this.classesTutoring.push(c);
    }
  }

  removeClassToTutor(c) {
    this.classesTutoring.push(c);
  }

  getProfileType() {
    return "Seller";
  }
}

export default Profile;
