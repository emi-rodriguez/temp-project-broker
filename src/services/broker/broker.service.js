// Initializes the `broker` service on path `/broker`
const createService = require('feathers-memory');
const hooks = require('./broker.hooks');
const filters = require('./broker.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'broker',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/broker', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('broker');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
