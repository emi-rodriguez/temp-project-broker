const broker = require('./broker/broker.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(broker);
};
