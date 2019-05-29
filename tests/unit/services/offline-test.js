import { moduleFor, test } from 'ember-qunit';

let offline = window.Offline;

moduleFor('service:offline', 'Unit | Service | offline');

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject({ offline });
  assert.ok(service);
});
