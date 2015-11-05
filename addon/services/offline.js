import Ember from 'ember';

const {
  set: set,
  getWithDefault,
  on
} = Ember;

export default Ember.Service.extend({
  offline: null,

  _setup: on('init', function() {
    const offline = window.Offline;

    offline.options = getWithDefault(this, 'emberOffline', {});

    set(this, 'offline', offline);
  })
});
