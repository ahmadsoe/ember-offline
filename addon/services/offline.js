import Service from '@ember/service';
import { set, get } from '@ember/object';
import { equal } from '@ember/object/computed';

export default Service.extend({
  state: 'up',
  isUp: equal('state', 'up'),
  isDown: equal('state', 'down'),

  init() {
    this._super(...arguments);

    const offline = get(this, 'offline');

    offline.on('up', () => {
      set(this, 'state', 'up');
    });

    offline.on('down', () => {
      set(this, 'state', 'down');
    });
  },

  check() {
    return get(this, 'offline').check();
  },
});
