import config from '../config/environment';

export function initialize() {
  const application = arguments[1] || arguments[0];

  // apply config to global Offline
  window.Offline = window.Offline || {};
  window.Offline.options = config.emberOffline;

  application.register('offline:main', window.Offline, { instantiate: false });
  application.inject('service:offline', 'offline', 'offline:main');
}

export default {
  name: 'offline',
  initialize
};
