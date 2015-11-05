import Ember from 'ember';

const { get, set, on, computed: { equal } } = Ember;

export default Ember.Service.extend({
  state: 'up',
  isUp: equal('state', 'up'),
  isDown: equal('state', 'down'),

  check() {
    return get(this, 'offline').check();
  },

  _setupEvents: on('init', function() {
    let offline = get(this, 'offline');

    offline.on('up', () => {
      set(this, 'state', 'up');
    });

    offline.on('down', () => {
      set(this, 'state', 'down');
    });
  })
});
