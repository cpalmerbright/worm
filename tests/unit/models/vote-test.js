import { module, test } from 'qunit';

import { setupTest } from 'worm/tests/helpers';

module('Unit | Model | vote', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('vote', {});
    assert.ok(model);
  });
});
