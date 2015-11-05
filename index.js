/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-offline',
  included: function(app) {
    this._super.included(app);

    var config = this.project.config(app.env);

    var themes = config.emberOffline.themes;
    var themesDir = app.bowerDirectory + '/offline/themes';

    if (themes.theme) {
      app.import(themesDir + '/offline-theme-' + themes.theme + '.css');
      app.import(themesDir + '/offline-language-' + themes.language + '.css');
    }

    if (themes.indicator) {
      app.import(themesDir + '/offline-theme-' + themes.indicator + '-indicator.css');
      app.import(themesDir + '/offline-language-' + themes.language + '-indicator.css');
    }

    app.import(app.bowerDirectory + '/offline/offline.js');
  }
};
