exports.config = {
  // seleniumAddress: 'http://chrome:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
      browserName: 'firefox'
  },

  specs: ['Protractor/todo-spec.js']
};

