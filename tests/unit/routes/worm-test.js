import { module, test } from 'qunit';
import { setupTest } from 'worm/tests/helpers';

module('Unit | Route | worm', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:worm');
    assert.ok(route);
  });
});
