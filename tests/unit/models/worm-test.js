import { module, test } from 'qunit';

import { setupTest } from 'worm/tests/helpers';

module('Unit | Model | worm', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('worm', {});
    assert.ok(model);
  });
});
