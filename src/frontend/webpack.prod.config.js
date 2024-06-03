const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const prodConfig = {

  remotes: {
    "micro-frontend": "http://localhost:30000/mfe/micro-frontend/remoteEntry.js",
  },

  shared: {

    //...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    "@angular/core": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    "@angular/common": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    "@angular/common/http": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    "@angular/router": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
    Axios: {
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    },
  },

};

module.exports = withModuleFederationPlugin(prodConfig);
