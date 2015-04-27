import Ember from 'ember';

export default Ember.Route.extend({
  init: function() {
    window.setInterval(this.checking, 3000);
  },

  checking: function () {
    this.$.get('/ajax_test');
  }
});
