/* jshint node: true */
'use strict';

var extend = require('util')._extend;

module.exports = {
  name: 'ember-offline',
  included: function(app) {
    this._super.included(app);

    var defaultThemes = {
      theme: 'default',
      indicator: false,
      language: 'english'
    };

    var config = this.project.config(app.env);
    var emberOffline = config.emberOffline || {};
    var configThemes = emberOffline.themes || {};

    var themes = extend(defaultThemes, configThemes);
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
