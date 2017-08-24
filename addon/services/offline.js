import Service from '@ember/service';
import { set, get } from '@ember/object';
import { on } from '@ember/object/evented';
import { equal } from '@ember/object/computed';

export default Service.extend({
  state: 'up',
  isUp: equal('state', 'up'),
  isDown: equal('state', 'down'),

  check() {
    return get(this, 'offline').check();
  },

  _setupEvents: on('init', function() {
    const offline = get(this, 'offline');
    
    offline.on('up', () => {
      set(this, 'state', 'up');
    });

    offline.on('down', () => {
      set(this, 'state', 'down');
    });
  })
});
