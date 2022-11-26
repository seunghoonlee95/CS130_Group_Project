// Let this class be recording the history of tasks as it assigns a
// customer and a tasker. Taskmarketplace will be for tasks waiting to
// be taken up by a seller
class Task {
  constructor({ taskID, status, customerID, deliveryWindow }) {
    this.taskID = taskID;
    this.status = status; // to store
    this.customerID = customerID; // associated customer id
    this.deliveryWindow = deliveryWindow; // tuple of date i.e. {datestart, deadline}
    this.tasker = null; // no tasker at task birth (default value)
  }

  // set tasker id of whoever is completing the order
  // could be set to null to send task back to marketplace
  updateTasker(new_tasker) {
    this.tasker = new_tasker;
  }

  // change delivery window
  updateDeliveryWindow(newWindow) {
    this.deliveryWindow = newWindow;
  }

  // set as pending/in progress/complete
  updateStatus(new_status) {
    this.status = new_status;
  }

  getCategory() {
    return null;
  }
}

class TutoringTask extends Task {
  constructor({
    taskID,
    status,
    customerID,
    deliveryWindow,
    classID,
    tutoringType,
    requestedQualifications,
    description,
    hourlyOfferRate,
  }) {
    super({ taskID, status, customerID, deliveryWindow });
    this.classID = classID;
    this.tutoringType = tutoringType; // one of three types: Content helo, Assignment help, exam help
    this.hourlyOfferRate = hourlyOfferRate; // customer's hourly tutoring budget
    this.requestedQualifications = requestedQualifications;
    this.description = description;
  }

  updateHourlyOfferRate(rate) {
    this.updateHourlyOfferRate = rate;
  }

  updateRequestedQualifications(q) {
    this.requestedQualifications = q;
  }

  updateDescription(d) {
    this.description = d;
  }

  getCategory() {
    return "Tutoring";
  }
}

class SwipeTask extends Task {
  constructor({
    taskID,
    status,
    customer,
    deliveryWindow,
    diningHall,
    priceOffer,
    numSwipes,
  }) {
    super({ taskID, status, customer, deliveryWindow });
    this.diningHall = diningHall; // from a pre set list of dining halls
    this.priceOffer = priceOffer; // price per swipe
    this.numSwipes = numSwipes;
  }

  updateDiningHall(d) {
    this.diningHall = d;
  }

  updatePriceOffer(p) {
    this.priceOffer = priceOffer;
  }

  updateNumSwipes(n) {
    this.numSwipes = n;
  }

  getCategory() {
    return "Swipe";
  }
}

// The way carpooling is going to work is as follows
// The marletplace is a little different for it.
// Customer lists his desired start and end locations and time
// seller is selling a ride to interested customer from their
//planned start and end locations and customers will take this only
// if it is within a certain range of their own desired start and end
class CarpoolTask extends Task {
  constructor({
    taskID,
    status,
    customer,
    deliveryWindow,
    startLoc,
    endLoc,
    spotsNeeded,
    offerPrice,
  }) {
    // note that delivery window here is based on the time period the customer
    // wants to leave the start location as we cannot determine how long it will
    // take to get to the end location
    super({ taskID, status, customer, deliveryWindow });
    this.startLoc = startLoc; // this is in coordinates for google maps
    this.endLoc = endLoc;
    this.spotsNeeded = spotsNeeded;
    this.offerPrice = offerPrice;
  }

  updateStartLoc(s) {
    this.startLoc = s;
  }

  updateEndLoc(e) {
    this.endLoc = e;
  }

  updateSpotsNeeded(n) {
    this.spotsNeeded = n;
  }

  updateOfferPrice(p) {
    this.offerPrice = p;
  }

  getCategory() {
    return "Carpool";
  }
}

module.export = Task;
