import { moduleFor, test } from 'ember-qunit';

let offline = window.Offline;

moduleFor('service:offline', 'Unit | Service | offline', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject({ offline });
  assert.ok(service);
});
