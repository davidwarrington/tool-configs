const baseConfig = require('./index');

module.exports = {
  ...baseConfig,

  extends: baseConfig.extends.flatMap(config => {
    if (config === 'airbnb-base') {
      return [config, 'airbnb-typescript/base'];
    }

    return config;
  }),
};
