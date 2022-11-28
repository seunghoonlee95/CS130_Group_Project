const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.notifyTaskTaken = async (msg_customer, msg_tasker) => {
  sgMail.send(msg_customer);
  sgMail.send(msg_tasker);
};
