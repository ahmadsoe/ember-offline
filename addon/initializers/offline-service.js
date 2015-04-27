import OfflineService from 'ember-offline/services/offline-service';

export function initialize(container, application) {
  const emberOffline = application.get('emberOffline') || {};

  application.register('config:offline', emberOffline, { instantiate: false });
  application.register('service:offline', OfflineService, { singleton: true });

  application.inject('service:offline', 'emberOffline', 'config:offline');

  [ 'route', 'controller', 'view', 'component' ].forEach((factory) => {
    application.inject(factory, 'offline', 'service:offline');
  });
}

export default {
  name: 'offline-service',
  initialize: initialize
};
