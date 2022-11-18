class Profile {
  constructor({ firstName, lastName, email }) {
    this.firstName = firstName;
    this.lastname = lastName;
    this.email = email;
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

  getProfleType() {
    return "Customer";
  }
}

// once seller behavior activated, pass parameters of regular profile
// into the seller profile
class SellerProfile {
  constructor(firstName, lastName, email) {
    super(firstName, lastName, email);
    // transcript must be passed as the binary of the ucla
    // unofficial pdf upload
    this.classesCompleted = [];
  }

  setTranscript(transcript) {
    this.transcript = transcript;
  }

  parseTranscript(transcript, gradeCutoff) {
    // parse transcript using j-pdfjson to identify classes seller has
    // taken, and the grades the received
  }

  filterClassesCompleted(gradeCutOff) {
    // return classes from classesCompleted array where seller obtained a
    // grade >= gradeCutOff specified this is to filter who to send the task to
    // on the cutsomer side
  }

  getProfileType() {
    return "Seller";
  }
}

module.exports = Profile;
