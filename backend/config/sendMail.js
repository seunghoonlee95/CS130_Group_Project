const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);

// const msg = {
//   to: "hussein1171@g.ucla.edu",
//   from: "bruinpal.ucla@gmail.com",
//   subject: "test",
//   text: "hello",
//   html: "<strong>hello</strong>",
// };
// sgMail.send(msg);

exports.notifyTaskTaken = async (msg_customer, msg_tasker) => {
  sgMail.send(msg_customer);
  sgMail.send(msg_tasker);
};
