import Ember from 'ember';
import initializer from '../../../initializers/offline-service';
import { module, test } from 'qunit';

var container, application;

module('OfflineServiceInitializer', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      container = application.__container__;
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initializer.initialize(container, application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
