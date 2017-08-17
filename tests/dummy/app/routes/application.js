import Route from '@ember/routing/route';

export default Route.extend({
  init() {
    window.setInterval(this.checking, 3000);
  },

  checking() {
    this.$.get('/ajax_test');
  }
});
