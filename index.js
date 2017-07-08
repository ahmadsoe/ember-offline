/* eslint-env node */
var FastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-offline',
  options: {
    nodeAssets: {
      'offline-js': {
        vendor: {
          srcDir: '',
          include: ['offline.js', 'themes/*'],
          processTree(input) {
            return FastbootTransform(input);
          }
        }
      }
    }
  },
  included(app) {
    this._super.included.apply(this, arguments);
    this._ensureThisImport();

    var config = this.project.config(app.env);

    var themes = config.emberOffline.themes;
    var themesDir =  'vendor/offline-js/themes';

    if(!themes) {
      themes = {
        theme: 'chrome',
        indicator: false,
        language: 'english',
      }
    }

    if (themes.theme) {
      this.import(`${themesDir}/offline-theme-${themes.theme}.css`);
      this.import(`${themesDir}/offline-language-${themes.language}.css`);
    }

    if (themes.indicator) {
      this.import(`${themesDir}/offline-theme-${themes.indicator}-indicator.css`);
      this.import(`${themesDir}/offline-language-${themes.language}-indicator.css`);
    }

    this.import('vendor/offline-js/offline.js');
  },
  _ensureThisImport() {
    if (!this.import) {
      this._findHost = function findHostShim() {
        let current = this;
        let app;

        do {
          app = current.app || app;
        } while (current.parent.parent && (current = current.parent));
        return app;
      };
      this.import = function importShim(asset, options) {
        let app = this._findHost();
        app.import(asset, options);
      };
    }
  }
};
