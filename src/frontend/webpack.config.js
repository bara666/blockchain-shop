const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "micro-frontend": "http://localhost:4201/remoteEntry.js",
  },

  shared: {

    //...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    "@angular/core": { requiredVersion: 'auto' },
    "@angular/common": { requiredVersion: 'auto' },
    "@angular/common/http": { requiredVersion: 'auto' },
    "@angular/router": { requiredVersion: 'auto' },
    Axios: {
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    },
  },

});
