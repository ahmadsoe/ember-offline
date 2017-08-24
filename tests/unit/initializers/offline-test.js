import Application from '@ember/application';
import { run } from '@ember/runloop';
import { initialize } from '../../../initializers/offline';
import { module, test } from 'qunit';

let registry, application;

module('Unit | Initializer | offline', {
  beforeEach: function() {
    run(function() {
      application = Application.create();
      registry = application.registry;
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(registry, application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
